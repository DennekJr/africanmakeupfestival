"use client";
import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Box } from "@mui/material";
import { useEffect } from "react";
import "./checkout.module.css";
import { HiddenFormDropdown } from "../../../(home)/checkout/components/hiddenFormDropdown/hiddenFormDropdown";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../../../lib/hooks";
import { BillingFormSchema } from "../../../lib/features/checkout/checkoutSlice";
import {
  initiatePaystackTransaction,
  PostPaystackTicketPurchases,
  PostStripeTicketPurchases,
  PostTransaction, sendEmail
} from "../../../(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import { CheckoutClientForm } from "@/app/(home)/checkout/components/CheckoutClientForm/CheckoutClientForm";
import { useFormik } from "formik";
import PaystackPop from "@paystack/inline-js";
import { loadStripe } from "@stripe/stripe-js";
import * as process from "process";
import { getTicketCost } from "@/app/(home)/checkout/components/utils";
import { verifyPaystackPayment } from "@/app/(home)/utils";

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
  const {
    tickets,
    formErrors,
    total,
    payStackCheckout,
    billingInfo,
    formValues,
  } = useAppSelector((state) => state.checkout);
  useEffect(() => {
    if (total === 0) {
      router.push("/ticket");
    }
  }, []);

  const popup = new PaystackPop();

  const formik = useFormik({
    initialValues: billingFormValues,
    validationSchema: BillingFormSchema,
    onSubmit: async () => {},
  });

  const handleStripePayment = async (e) => {
    e.preventDefault();
    const stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
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
        const value = getTicketCost(ticket);
        const item = {
          price_data: {
            currency: "ngn",
            product_data: {
              name:
                String(ticket.ticketName).charAt(0).toUpperCase() +
                String(ticket.ticketName).slice(1),
            },
            unit_amount: value * 100,
          },
          quantity: ticket.value,
        };
        stripeData.push(item);
      });
    const ticketPurchaseData = {
      stripeCheckoutData: stripeData,
      ticketData: {
        buyerForm: billingInfo,
        otherTicketForms: formValues,
      },
    };
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: ticketPurchaseData, // Example item,
      }),
    });
    const { session, itemData } = await response.json();
    const sessionId = session.id;
    const stripe = await stripePromise;
    if (stripe === null) return;
    if ("redirectToCheckout" in stripe) {
      await PostStripeTicketPurchases({ itemData, session }).then(async () => {
        const transactionToPost = {
          Paystack_Id: "",
          Stripe_Id: sessionId,
          Currency: session.currency,
          Email: payStackCheckout.email,
          UnitNumber: payStackCheckout.total
        };
        console.log("Transaction to post", transactionToPost);
        await PostTransaction(transactionToPost);
      });
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) console.warn("Stripe BoothCheckout error:", error.message);
    }
    if (Object.keys(formErrors).length === 0) {
    }
  };

  const handlePaystackPayment = async () => {
    const ticketPurchaseData = {
      payStackCheckout: payStackCheckout,
      ticketData: {
        buyerForm: billingInfo,
        otherTicketForms: formValues,
      },
    };

    await initiatePaystackTransaction(ticketPurchaseData)
      .then(async ({ ticketData, transactionData }) => {
        const accessCode = transactionData.access_code;
        popup.resumeTransaction(accessCode);
        return {
          transactionData: transactionData,
          ticketData: ticketData
        };
      }).then(async ({ transactionData, ticketData }) => {
        const { data } = await verifyPaystackPayment(
          transactionData.reference
        ).then(async ({ data }) => {
          console.log(data);
          await PostPaystackTicketPurchases({ ticketData, transactionData });
          const transactionToPost = {
            Paystack_Id: transactionData.reference,
            Stripe_Id: "",
            Currency: "ngn",
            Email: payStackCheckout.email,
            UnitNumber: payStackCheckout.total
          };
          await PostTransaction(transactionToPost);
          await sendEmail(payStackCheckout.email, payStackCheckout.total, "NGN");
        })
        const transactionStatus = data.transactionData.status;
        return {
          transactionData: transactionData,
          ticketData: ticketData,
          transactionStatus: transactionStatus
        }
      }).catch((error) => {
        console.error("Paystack transaction error: ", error);
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
                  <ChevronLeftIcon className={"!size-2"} />
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
              <CheckoutClientForm />
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
          title={"Assign other paystackTickets to different e-mail addresses?"}
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

export default CheckoutForm;
