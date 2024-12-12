"use client";
import * as React from "react";
import { useEffect, useRef } from "react";
import {
  GetSponsoredTicket,
  PostPaystackTicketPurchases,
  PostStripeTicketPurchases,
  PostTransaction,
  sendEmail,
  TransactionExists,
  VerifyPaystackTransaction,
  VerifyStripeTransaction
} from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import Box from "@mui/material/Box";
import { Button, CircularProgress } from "@mui/material";
import {
  notFound,
  usePathname,
  useRouter,
  useSearchParams
} from "next/navigation";
import CheckIcon from "@mui/icons-material/Check";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { PurchaseDetailTable } from "@/app/(home)/success/SuccessOrErrorVerification/PurchaseDetailTable";
import { AgoraBox } from "@/app/(home)/components/newHome/utils";
import { SendEmailTemplate } from "@/app/SendEmailTemplate";
import { initialCheckoutStateType } from "@/app/lib/features/checkout/checkoutSlice";
import { HandlePaystackBoothPurhase } from "@/app/(home)/exhibit/register/PaystackCall";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";
import QRCode from "qrcode";

export const SuccessOrErrorVerification = () => {
  const router = useRouter();
  const pathname = usePathname(); // Gets the path without the domain (e.g., '/about')
  const hasRun = useRef(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [currency, setCurrency] = React.useState("");
  const [total, setTotal] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const [metaData, setMetaData] = React.useState({});
  const searchParams = useSearchParams();
  const reference = searchParams?.get("reference");
  const paymentType = searchParams?.get("payment");
  const sessionId = searchParams?.get("sessionId");
  const code = searchParams?.get("code");
  const fullUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}${searchParams?.toString() ? `?${searchParams?.toString()}` : ""}`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [metaData, setMetaData] = React.useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const generateQRBase64 = async () => {
    return await new Promise((resolve, reject) => {
      QRCode.toDataURL(fullUrl, function(err, code) {
        if (err) {
          reject(reject);
          return;
        }
        resolve(code);
      });
    });
  };
  const renderValidatedCodeCheckout = async () => {
    const isCodeInDb = await TransactionExists(
      reference,
      sessionId,
      code
    );
    const qrCodeBase64 = await generateQRBase64();
    const ticketPurchaseData = await GetSponsoredTicket(code);
    if (ticketPurchaseData) {
      setMetaData(ticketPurchaseData);
      setIsSuccess(true);
      setCurrency("NGN");
      setTotal(0);
      let email = "";
      let name = "";
      Object.values(
        ticketPurchaseData.ticketData.buyerForm as {
          [ticket: string]: { name: string; value: string }[];
        }[]
      ).map(async (detail) => {
        email = detail[0][4].value;
        name = `${detail[0][0].value} ${detail[0][1].value}`;
      });
      const transactionToPost = {
        Paystack_Id: "",
        Stripe_Id: "",
        Code: ticketPurchaseData.code,
        Currency: "NGN",
        Email: email,
        UnitNumber: 0
      };
      if (!isCodeInDb) {
        await PostTransaction(transactionToPost);
        const template = SendEmailTemplate({
          name: name,
          total: 0,
          tickets: ticketPurchaseData.tickets,
          reference: ticketPurchaseData.code,
          imageUrl: qrCodeBase64 as string,
          isInvited: true
        });
        await sendEmail(email, template);
      }
    }
  };
  const checkStatus = async () => {
    const isReferenceOrSessionIdInDB = await TransactionExists(
      reference,
      sessionId,
      code
    );
    const qrCodeBase64 = await generateQRBase64();
    if (paymentType !== "stripe") {
      const result = await VerifyPaystackTransaction(reference);
      if (result.transactionData.status === "success") {
        setCurrency(result.transactionData.currency);
        setTotal(result.transactionData.amount);
        setMetaData(result.transactionData.metadata);
        setIsSuccess(true);
        const dataToStore = result.transactionData.metadata;
        const transactionData = result.transactionData;
        const isBoothPurchase =
          transactionData.metadata.purchaseType === "booth";
        let email = "";
        let total = "";
        if (isBoothPurchase) {
          total = formatCurrency(Number(transactionData.amount));
          email = transactionData.metadata.boothData.buyerForm.form_email;
        } else {
          Object.values(
            transactionData.metadata.ticketData.buyerForm as {
              [ticket: string]: { name: string; value: string }[];
            }[],
          ).map(async (detail) => {
            email = detail[0][4].value;
          });
          total = formatCurrency(dataToStore.payStackCheckout.total);
        }
        if (!isReferenceOrSessionIdInDB) {
          if (!isBoothPurchase) {
            await PostPaystackTicketPurchases({ transactionData });
          } else {
            await HandlePaystackBoothPurhase({ transactionData });
          }
          const transactionToPost = {
            Paystack_Id: transactionData.reference,
            Stripe_Id: "",
            Currency: result.transactionData.currency,
            Email: email,
            UnitNumber: total
          };
          await PostTransaction(transactionToPost);
          let name = "";
          if (transactionData.metadata.purchaseType === "booth") {
            name =
              transactionData.metadata.boothData.buyerForm.form_contactName;
          } else {
            Object.values(
              transactionData.metadata.ticketData
                .buyerForm as initialCheckoutStateType["billingInfo"]
            ).map(
              async (detail) =>
                (name = `${detail[0][0].value} ${detail[0][1].value}`)
            );
          }
          const template = SendEmailTemplate({
            name: name,
            total: result.transactionData.amount,
            tickets: dataToStore.tickets,
            reference: transactionData.reference,
            imageUrl: qrCodeBase64 as string,
            isInvited: false
          });
          await sendEmail(email, template);
        }
      } else router.push("/checkout");
    } else {
      setIsSuccess(true);
      const result = await VerifyStripeTransaction(sessionId);
      if (result.status === "complete") {
        const ticketData = {
          buyerForm: JSON.parse(result.metadata.buyerForm),
          tickets: JSON.parse(result.metadata.tickets)
        };
        const tickets = JSON.parse(result.metadata.tickets);
        const data = {
          ticketData: ticketData,
          tickets: tickets
        };
        setMetaData(data);
        setCurrency((result.currency as string).toUpperCase());
        setTotal(result.amount_total);
        if (!isReferenceOrSessionIdInDB) {
          await PostStripeTicketPurchases({ data, sessionId });
          const transactionToPost = {
            Paystack_Id: "",
            Stripe_Id: result.id as string,
            Currency: result.currency,
            Email: result.customer_details.email,
            UnitNumber: result.amount_total
          };
          await PostTransaction(transactionToPost);
          const template = SendEmailTemplate({
            name: result.customer_details.name,
            total: result.amount_total,
            tickets: tickets,
            reference: result.id.slice(-10),
            imageUrl: qrCodeBase64 as string,
            isInvited: false
          });
          await sendEmail(result.customer_details.email, template);
        }
        // }
      }
    }
  };
  useEffect(() => {
    if (hasRun.current) return; // Prevent double invocation
    hasRun.current = true;
    if (code) {
      renderValidatedCodeCheckout();
    }
    if (reference || sessionId) {
      checkStatus();
      // console.log("sessionId", sessionId, reference);
    }
  }, [reference, sessionId]);
  if (sessionId === null && reference === null && code === null) return notFound();
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  if (!isSuccess) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const renderPurchaseTable = () => {
    if (metaData && metaData) {
      return (
        <PurchaseDetailTable
          paymentType={paymentType === "stripe" ? "stripe" : paymentType === "paystack" ? "paystack" : "code"}
          metaData={metaData?.ticketData}
          currency={currency}
          total={total}
          tickets={metaData?.tickets}
        />
      );
    }
  };
  return (
    <AgoraBox
      className={
        "w-full py-16 flex text-center justify-center lg:min-h-[calc(100vh-600px)]"
      }
    >
      <Box className={"flex flex-col items-center justify-center"}>
        <Box className={"bg-primary w-fit p-4 mb-12"}>
          <CheckIcon
            sx={{ fontSize: "4rem" }}
            className={"text-textColor text-[150px]"}
          />
        </Box>
        <h1
          className={
            "text-center text-[27px] md:text-[44px] lg:text-[3em] text-black font-bold"
          }
        >
          Payment Completed
        </h1>
        <Box className={"bg-lightGrey  mb-12"}>
          <Box className={"flex items-center justify-center p-2"}>
            <ConfirmationNumberIcon
              sx={{ rotate: "-90deg", fontSize: "1rem" }}
              className={"text-black mr-2"}
            />
            <h3 className={"text-black"}>
              Order Confirmation Code: {reference || sessionId?.slice(-10) || code}
            </h3>
          </Box>
        </Box>
        <Box className={"text-left w-full"}>
          <h3 className={"text-black text-lg mb-2"}>Purchase Details</h3>
          <Box className={"border border-midGrey rounded-lg"}>
            {renderPurchaseTable()}
          </Box>
          <Box>
            <Button
              onClick={handlePrint}
              className={"w-full !p-4 !bg-primary !text-textColor !mt-8"}
            >
              Print Invoice
            </Button>
          </Box>
        </Box>
        <Box
          className={
            "flex w-full flex-col md:flex-row justify-between text-lightSecondary py-4 font-semibold"
          }
        >
          <Box>contact@africaskincarefestival.com</Box>
          <Box>+234 907 158 2383</Box>
        </Box>
        {/*<Box>*/}
        {/*  <QRImage*/}
        {/*    text={fullUrl}*/}
        {/*    options={{*/}
        {/*      type: 'image/jpeg',*/}
        {/*      quality: 0.3,*/}
        {/*      errorCorrectionLevel: 'M',*/}
        {/*      margin: 3,*/}
        {/*      scale: 4,*/}
        {/*      width: 200,*/}
        {/*      color: {*/}
        {/*        dark: '#C43C2A',*/}
        {/*        light: '#F5F5F5',*/}
        {/*      },*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Box>*/}
      </Box>
    </AgoraBox>
  );
};
