"use client";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import { AgoraBox } from "@/app/(home)/components/newHome/utils";
import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import process from "process";
import PaystackPop from "@paystack/inline-js";
import { notFound, usePathname, useRouter, useSearchParams } from "next/navigation";
import { PurchaseDetailTable } from "@/app/(home)/success/SuccessOrErrorVerification/PurchaseDetailTable";
import { GetBookingConfirmation, sendEmail } from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { initialCheckoutStateType } from "@/app/lib/features/checkout/checkoutSlice";
import { BookingConfirmationTemplate } from "@/app/SendEmailTemplate/bookingConfirmationTemplate";

export const BookingConfirmation = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname(); // Gets the path without the domain (e.g., '/about')
  const reference = searchParams?.get("reference");
  const sessionId = searchParams?.get("sessionId");
  const hasRun = useRef(false);
  const [booking, setBooking] = useState<object>();
  const [paymentMethod, setPaymentMethod] = useState("");
  const fullUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${pathname}${searchParams?.toString() ? `?${searchParams?.toString()}` : ""}`;

  useEffect(() => {
    if (hasRun.current) return; // Prevent double invocation
    hasRun.current = true;
    if (reference || sessionId) {
      GetBooking();
    }
  }, [reference, sessionId]);

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
  const GetBooking = async () => {
    const bookingFound = await GetBookingConfirmation(reference || sessionId);
    const qrCodeBase64 = await generateQRBase64();
    if (bookingFound?.Paystack_Id !== "") {
      setPaymentMethod("Paystack");
    } else {
      setPaymentMethod("Stripe");
    }
    setBooking(bookingFound);

    const template = BookingConfirmationTemplate({
      name: getName(bookingFound?.TicketDetails.ticketData).name,
      total: bookingFound?.Total * 100,
      tickets: bookingFound?.TicketDetails.tickets,
      reference: paymentMethod === "Paystack" ? bookingFound?.Paystack_Id : bookingFound?.Stripe_Id.slice(-10),
      imageUrl: qrCodeBase64 as string,
      paymentUrl: fullUrl
    });
    await sendEmail(getName(bookingFound?.TicketDetails.ticketData).email, template);
  };

  const getName = (ticketData) => {
    let name = "";
    let email = "";
    Object.values(ticketData
      .buyerForm as initialCheckoutStateType["billingInfo"]
    ).map(
      async (detail) => {
        email = detail[4].value;
        name = `${detail[0].value} ${detail[1].value}`;
      });
    return { name: name, email: email };
  };

  const handleStripePayment = async (e) => {
    e.preventDefault();
    // Check billing info for empty fields
    // check other forms if more than one ticket for error
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
    const stripe = await stripePromise;
    if (stripe === null) return;
    if ("redirectToCheckout" in stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) console.warn("Stripe Booth payment error:", error.message);
    }
  };

  const handlePaystackPayment = async () => {
    const popup = new PaystackPop();
    popup.newTransaction({
      key: "pk_test_f415ce941d8802c8a2b36ef12ebcd1304cb372d6", // Replace with your Paystack public key
      email: booking?.TicketDetails.payStackCheckout.email, // Customer's email
      amount: booking?.Total * 100, // Amount in kobo (5000 NGN = 500000 kobo)
      currency: "NGN", // Currency (e.g., NGN, USD)
      reference: reference,
      callback: function() {
        router.push("/success?reference=" + reference);
      },
      onClose: function() {
        router.push("/");
      }
    });
  };
  const renderPurchaseTable = () => {
    if (booking) {
      return <PurchaseDetailTable
        paymentType={"paystack"}
        metaData={booking?.TicketDetails.ticketData}
        currency={"NGN"}
        total={booking?.Total * 100}
        tickets={booking?.TicketDetails.tickets}
      />;
    }
  };
  if (sessionId === null && reference === null)
    return notFound();
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
          Booking Confirmation
        </h1>
        <Box className={"bg-lightGrey  mb-12"}>
          <Box className={"flex items-center justify-center p-2"}>
            <ConfirmationNumberIcon
              sx={{ rotate: "-90deg", fontSize: "1rem" }}
              className={"text-black mr-2"}
            />
            <h3 className={"text-black"}>
              Confirmation Code: {paymentMethod === "Paystack" ? booking?.Paystack_Id : booking?.Stripe_Id.slice(-10)}
            </h3>
          </Box>
        </Box>
        <Box className={"text-left w-full"}>
          <h3 className={"text-black text-lg mb-2"}>Purchase Details</h3>
          <Box className={"border border-midGrey rounded-lg"}>
            {renderPurchaseTable()}
          </Box>
          <Box className={"block lg:col-start-8 lg:col-span-4 space-y-8"}>
            <button
              onClick={async (e) => {
                console.log("Paystack", paymentMethod);
                if (paymentMethod === "Paystack") {
                  await handlePaystackPayment();
                } else {
                  await handleStripePayment(e);
                }
              }}
              type={"submit"}
              className="animation-hover inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-textColor h-14 px-6 py-4 mt-4 rounded-full relative w-full"
            >
              <span className="text-center w-full h-full">Pay now</span>
            </button>
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
      </Box>
    </AgoraBox>
  );
};
