"use client";
import * as React from "react";
import {
  PostPaystackTicketPurchases, PostStripeTicketPurchases,
  PostTransaction,
  sendEmail,
  VerifyPaystackTransaction,
  VerifyStripeTransaction
} from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import Box from "@mui/material/Box";
import { Button, CircularProgress } from "@mui/material";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { PurchaseDetailTable } from "@/app/(home)/success/SuccessOrErrorVerification/PurchaseDetailTable";
import { AgoraBox } from "@/app/(home)/components/newHome/utils";
import { SendEmailTemplate } from "@/app/SendEmailTemplate";
import { initialCheckoutStateType } from "@/app/lib/features/checkout/checkoutSlice";
import { HandlePaystackBoothPurhase } from "@/app/(home)/exhibit/register/PaystackCall";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";

export const SuccessOrErrorVerification = () => {
  const router = useRouter();
  const hasRun = useRef(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [currency, setCurrency] = React.useState("");
  const [total, setTotal] = React.useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [metaData, setMetaData] = React.useState<any>();
  const [purchaseType, setPurchaseType] = React.useState("");
  const searchParams = useSearchParams();
  const reference = searchParams?.get("reference");
  const paymentType = searchParams?.get("payment");
  const sessionId = searchParams?.get("sessionId");
  const checkStatus = async () => {
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
        if (!isBoothPurchase) {
          await PostPaystackTicketPurchases({ transactionData });
        } else {
          await HandlePaystackBoothPurhase({ transactionData });
        }
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
          name = transactionData.metadata.boothData.buyerForm.form_contactName;
        } else {
          Object.values(
            transactionData.metadata.ticketData
              .buyerForm as initialCheckoutStateType["billingInfo"],
          ).map(
            async (detail) =>
              (name = `${detail[0][0].value} ${detail[0][1].value}`),
          );
        }
        const template = SendEmailTemplate({
          name: name,
          total: dataToStore.payStackCheckout.total,
          tickets: dataToStore.tickets,
          reference: transactionData.reference
        });
        await sendEmail(email, template);
      } else router.push("/checkout");
    } else {
      setIsSuccess(true);
      const result = await VerifyStripeTransaction(sessionId);
      if (result.status === "complete") {
        console.log("result", result);
        if (result.metadata.type === "ticket") {
          const ticketData = {
            buyerForm: JSON.parse(result.metadata.buyerForm),
            otherTicketForms: JSON.parse(result.metadata.otherTicketForms)[0]
          };
          const stripeMetaData = {
            ticketData: ticketData,
            purchaseType: "ticket"
          };
          setPurchaseType("ticket");
          setMetaData(stripeMetaData);
          setCurrency((result.currency as string).toUpperCase());
          setTotal(result.amount_total);
          await PostStripeTicketPurchases({ ticketData });
          const transactionToPost = {
            Paystack_Id: (result.id as string).slice(-10),
            Stripe_Id: "",
            Currency: result.currency,
            Email: result.customer_details.email,
            UnitNumber: result.amount_total
          };
          await PostTransaction(transactionToPost);
        }
      }
    }
  };
  useEffect(() => {
    if (hasRun.current) return; // Prevent double invocation
    hasRun.current = true;
    if (reference || sessionId) {
      console.log("Checking Status");
      checkStatus();
      // console.log("sessionId", sessionId, reference);
    }
  }, []);
  if (sessionId === null && reference === null) return notFound();
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
  console.log(metaData, purchaseType);
  const renderPurchaseTable = () => {
    if (purchaseType && metaData) {
      return <PurchaseDetailTable
        metaData={
          purchaseType === "ticket"
            ? metaData?.ticketData
            : metaData.boothData
        }
        currency={currency}
        total={total}
      />;
    } else {
      return <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircularProgress />
      </Box>;
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
              Order Confirmation Code: {reference || sessionId?.slice(-10)}
            </h3>
          </Box>
        </Box>
        <Box className={"text-left w-full"}>
          <h3 className={"text-black text-lg mb-2"}>Purchase Details</h3>
          <Box className={"border border-midGrey rounded-lg"}>
            {/*// eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain*/}
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
            "flex w-full justify-between text-lightSecondary py-4 font-semibold"
          }
        >
          <Box>contact@africaskincarefestival.com</Box>
          <Box>+234 907 158 2383</Box>
        </Box>
      </Box>
    </AgoraBox>
  );
};
