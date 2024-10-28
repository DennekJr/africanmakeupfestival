"use client";
import * as React from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box } from "@mui/material";
import { useEffect } from "react";
import "./checkout.module.css";
import { HiddenFormDropdown } from "../../../(home)/checkout/components/hiddenFormDropdown/hiddenFormDropdown";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../../lib/hooks";
import {
  BillingFormSchema,
  DelegateTicket,
  ExplorerTicket,
  FounderTicket,
  InvestorTicket,
} from "../../../lib/features/checkout/checkoutSlice";
import {
  initiatePaystackTransaction,
  postTicket,
} from "../../../(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import { CheckoutClientForm } from "@/app/(home)/checkout/components/CheckoutClientForm/CheckoutClientForm";
import { useFormik } from "formik";
import PaystackPop from '@paystack/inline-js';
import { loadStripe } from '@stripe/stripe-js';
import * as process from "process";


const billingFormValues = {
  "Confirm Email": "",
  Email: "",
  "First Name": "",
  "Last Name": "",
  Organisation: "",
  "Organisation Role": "",
  "Organisation Website": "",
};


export const CheckoutForm = () => {
  const router = useRouter();
  const { tickets, formErrors, myTicket, total, billingInfo, leftOverTickets, payStackCheckout } =
    useAppSelector((state) => state.checkout);
  useEffect(() => {
    if (total === 0) {
      router.push("/ticket");
    }
  }, []);

  const popup = new PaystackPop()

  const formik = useFormik({
    initialValues: billingFormValues,
    validationSchema: BillingFormSchema,
    onSubmit: async () => {
    },
  });

  const handleStripePayment = async (e) => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    // setLoading(true);
    e.preventDefault();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: { myTicket: myTicket, total: total } // Example item,
      }),
    });
    const {sessionId} = await response.json();
    const stripe = await stripePromise;
    if ("redirectToCheckout" in stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) console.warn('Stripe Checkout error:', error.message);
    }
    // setLoading(false);
    if (Object.keys(formErrors).length === 0) {

    }
  };

  const handlePaystackPayment = async () => {
    initiatePaystackTransaction(payStackCheckout).then(async (e) => {
      const accessCode = e.transactionData.access_code;
      popup.resumeTransaction(accessCode)
      await postTicket({
        billingInfo: billingInfo,
        leftOverTickets: leftOverTickets,
      });
    });
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
                  <ChevronLeftIcon
                    className={
                      "!size-2"
                    }
                  />
                </button>
                <p className="text-[#7F7D82] cursor-default">
                  Go back to tickets
                </p>
              </Box>
              <p className="text-[#0A090B] text-4xl xl:text-5xl 2xl:text-6xl font-medium">
                Billing Information
              </p>
            </Box>
            <Box className={"space-y-5"}>
              <CheckoutClientForm formik={formik} />
            </Box>
          </Box>
          <Box className="hidden lg:block lg:col-start-8 lg:col-span-4 space-y-8">
            <Box className="space-y-6">
              <p className="text-[#0A090B] text-4xl xl:text-5xl 2xl:text-6xl !font-medium">
                Summary
              </p>
              <div className="border-y border-[#7F7D82] space-y-2 py-3">
                {Object.values(tickets).map((ticket, index) => {
                  if (ticket.value < 1) return;
                  const value =
                    ticket.ticketName === "investor"
                      ? InvestorTicket * ticket.value
                      : ticket.ticketName === "founder"
                        ? FounderTicket * ticket.value
                        : ticket.ticketName === "explorer"
                          ? ExplorerTicket * ticket.value
                          : DelegateTicket * ticket.value;
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
                <p className="font-medium">NGN {total}</p>
              </div>
            </Box>
            <button
              onClick={handlePaystackPayment}
              type={"submit"}
              className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-gray-100 hover:bg-[$0A090B]/90 h-14 px-6 py-4 rounded-full relative w-full"
            >
              <span className="text-center w-full h-full">
                CONTINUE TO LOCAL PAYMENT
              </span>
            </button>
            <button
              onClick={handleStripePayment}
              type={"submit"}
              className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-gray-100 hover:bg-[$0A090B]/90 h-14 px-6 py-4 rounded-full relative w-full"
            >
              <span className="text-center w-full h-full">
                CONTINUE TO INTERNATIONAL PAYMENT
              </span>
            </button>
          </Box>
        </Box>
        <HiddenFormDropdown
          title={"Select the ticket that belongs to you."}
          subTitle={
            "Tickets will only be assigned to the email address(es) you provide"
          }
          displayTicketDropdown={true}
        />
        <HiddenFormDropdown
          title={"Assign other tickets to different e-mail addresses?"}
          subTitle={
            "Tickets will only be assigned to the email address(es) you provide"
          }
          displayTicketDropdown={false}
        />
      </Box>
      {/*{showAlert && <Alert severity="error">Please fill in the proper values.</Alert>}*/}
    </form>
  );
};
