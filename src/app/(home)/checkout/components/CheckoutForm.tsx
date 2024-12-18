"use client";
import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import "./checkout.module.css";
import { HiddenFormDropdown } from "../../../(home)/checkout/components/hiddenFormDropdown/hiddenFormDropdown";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  BillingFormSchema, setPaystackCheckoutData,
  setTicketData
} from "../../../lib/features/checkout/checkoutSlice";
import { CheckoutClientForm } from "@/app/(home)/checkout/components/CheckoutClientForm/CheckoutClientForm";
import { useFormik } from "formik";
import { loadStripe } from "@stripe/stripe-js";
import * as process from "process";
import {
  formatCurrency,
  getTicketCost,
  getTicketValue
} from "@/app/(home)/checkout/components/utils";
import { AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";
import {
  initiatePaystackTransaction, PostBookingConfirmation,
  UploadSponsoredTicket
} from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import { setPaymentMethod } from "@/app/lib/features/register/registerSlice";

const billingFormValues = {
  "Confirm Email": "",
  Email: "",
  "First Name": "",
  "Last Name": "",
  Organisation: "",
  "Organisation Role": "",
  "Organisation Website": "",
};

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { tickets, total, payStackCheckout, billingInfo, validatedCode } =
    useAppSelector((state) => state.checkout);
  useEffect(() => {
    if (total === 0 && validatedCode.length === 0) {
      router.push("/ticket");
    }
  }, [router, total]);
  const formik = useFormik({
    initialValues: billingFormValues,
    validationSchema: BillingFormSchema,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: async () => {},
  });
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  function validateOtherTicketForm() {
    let isDisabled = false;
    Object.values(billingInfo).map((ticket) => {
      ticket.map((tickets) => {
        if (tickets.value === "" || Object.keys(billingInfo)[0] === "") {
          isDisabled = true;
          setDisabled(true);
          isDisabled = true;
          setError("Complete form to proceed to payment");
          setTimeout(() => {
            setError("");
            isDisabled = false;
            setDisabled(false);
          }, 3000);
        } else {
          setDisabled(false);
          isDisabled = false;
        }
      });
    });
    return isDisabled;
  }

  const handleStripePayment = async (e) => {
    e.preventDefault();
    // Check billing info for empty fields
    // check other forms if more than one ticket for error
    if (!validateOtherTicketForm()) {
      formik.handleSubmit();
      const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
      );
      const stripeData: {
        price_data: {
          currency: string;
          product_data: { name: string };
          unit_amount: number;
        };
        quantity: number;
      }[] = [];
      Object.values(tickets)
        .filter((item) => item.value > 0)
        .map((ticket) => {
          const value = getTicketValue(ticket);
          const item = {
            price_data: {
              currency: "ngn",
              product_data: {
                name:
                  String(ticket.ticketName).charAt(0).toUpperCase() +
                  String(ticket.ticketName).slice(1),
              },
              unit_amount: value * 100
            },
            quantity: ticket.value
          };
          stripeData.push(item);
        });
      const ticketPurchaseData = {
        stripeCheckoutData: stripeData,
        ticketData: {
          buyerForm: billingInfo,
        },
        total: total,
        tickets: tickets,
        purchaseType: "ticket"
      };
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: ticketPurchaseData // Example item,
        }),
      });
      dispatch(setTicketData(ticketPurchaseData.ticketData));
      const { session } = await response.json();
      const sessionId = session.id;
      const stripe = await stripePromise;
      if (stripe === null) return;
      if ("redirectToCheckout" in stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) console.warn("Stripe Booth payment error:", error.message);
      }
    }
  };

  const handlePaystackPayment = async () => {
    if (!validateOtherTicketForm()) {
      const ticketPurchaseData = {
        payStackCheckout: payStackCheckout,
        ticketData: {
          buyerForm: billingInfo,
        },
        tickets: tickets
      };
      dispatch(setTicketData(ticketPurchaseData.ticketData));
      dispatch(setPaymentMethod("paystack"));
      const req = await initiatePaystackTransaction(ticketPurchaseData);
      if (req) {
        const authUrl = req.paystackData.data.authorization_url;
        // router.push(authUrl);
        const paystackData = {
          checkoutUrl: authUrl,
          accessCode: req.paystackData.data.access_code,
          reference: req.paystackData.data.reference
        };
        dispatch(setPaystackCheckoutData(paystackData));
        const bookingConfirmation = {
          Paystack_Id: req.paystackData.data.reference,
          Stripe_Id: "",
          Total: total,
          Paystack_access_code: req.paystackData.data.access_code,
          Created_At: new Date(),
          TicketDetails: ticketPurchaseData
        };
        await PostBookingConfirmation(bookingConfirmation);
        router.push("/booking-confirmation?reference=" + req.paystackData.data.reference);
      }
    }
  };

  const handleValidatedCodePayment = async () => {
    const ticketPurchaseData = {
      ticketData: {
        buyerForm: billingInfo
      },
      tickets: tickets,
      code: validatedCode
    };
    await UploadSponsoredTicket(ticketPurchaseData);

    router.push("/success?code=" + validatedCode);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        className={
          "max-w-[1320px] py-8 md:py-14 lg:py-20 xl:py-28 2xl:py-32 mx-auto space-y-12 lg:space-y-16 2xl:space-y-24"
        }
      >
        <Box
          className={
            "w-full mt-16 grid lg:grid-cols-11 px-6 xl:px-0 space-y-12 lg:space-y-0"
          }
        >
          <Box className={"lg:col-span-6 space-y-8"}>
            <Box className={"space-y-3"}>
              <Box
                className={
                  "flex items-center gap-3 w-fit hover:!cursor-pointer"
                }
              >
                <button
                  className={
                    "inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap rounded-[calc(1rem-2px)] text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent border-[#504E56] text-[#504E56] size-6"
                  }
                  onClick={() => router.push("/ticket")}
                >
                  <ChevronLeftIcon className={"!size-2"} />
                </button>
                <p className="text-[#7F7D82] cursor-default">
                  Go back to tickets
                </p>
              </Box>
              <p className="text-[#0A090B] text-4xl xl:text-5xl 2xl:text-6xl font-medium">
                Personal Information
              </p>
            </Box>
            <HiddenFormDropdown
              title={"Select your ticket."}
              subTitle={
                "Tickets will only be assigned to the email address(es) you provide"
              }
              displayTicketDropdown={true}
            />
            <Box className={"space-y-5"}>
              <CheckoutClientForm />
            </Box>
          </Box>
          <Box className="block lg:col-start-8 lg:col-span-4 space-y-8">
            <Box className="space-y-6">
              <p className="text-[#0A090B] text-4xl xl:text-5xl 2xl:text-6xl !font-medium">
                Summary
              </p>
              <div className="border-y border-[#7F7D82] space-y-2 py-3">
                {Object.values(tickets).map((ticket, index) => {
                  if (ticket.value < 1) return;
                  const value = getTicketCost(ticket);
                  return (
                    <div
                      key={index}
                      className="flex justify-between gap-4 text-[#0A090B]"
                    >
                      <p className="text-[#0A090B] font-medium">
                        {ticket.value}x {ticket.ticketName.toUpperCase()}
                      </p>
                      <p>NGN {value}</p>
                    </div>
                  );
                })}
              </div>
              <div className="text-[#0A090B] flex justify-between text-lg">
                <p>Total</p>
                <p className="font-medium">NGN {formatCurrency(total)}</p>
              </div>
            </Box>

            {validatedCode.length === 0 && (
              <button
                onClick={handlePaystackPayment}
                type={"submit"}
                disabled={disabled}
                className="animation-hover inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-gray-100 hover:bg-[$0A090B]/90 h-14 px-6 py-4 rounded-full relative w-full"
              >
                <span className="text-center w-full h-full">
                  Checkout with Paystack
                </span>
              </button>
            )}
            {validatedCode.length === 0 && (
              <button
                onClick={async (e) => {
                  await handleStripePayment(e);
                }}
                type={"submit"}
                disabled={disabled}
                className="animation-hover inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-gray-100 hover:bg-[$0A090B]/90 h-14 px-6 py-4 rounded-full relative w-full"
              >
                <span className="text-center w-full h-full">
                  Checkout with Stripe
                </span>
              </button>
            )}
            {validatedCode.length > 0 && (
              <button
                onClick={handleValidatedCodePayment}
                type={"submit"}
                disabled={disabled}
                className="animation-hover inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-gray-100 hover:bg-[$0A090B]/90 h-14 px-6 py-4 rounded-full relative w-full"
              >
                <span className="text-center w-full h-full">Submit</span>
              </button>
            )}
            <AgoraTransitionBox className="transition-all text-center text-warning text-lg font-medium">
              {error}
            </AgoraTransitionBox>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default CheckoutForm;
