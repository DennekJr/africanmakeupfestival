"use client";
import {
  PostTransaction,
} from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import { loadStripe } from "@stripe/stripe-js";
import process from "process";

export const StripeCall = async ({ ticketPurchaseData, formData, total }: {ticketPurchaseData, formData, total: number}) => {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
  );
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
    const { error } = await stripe.redirectToCheckout({ sessionId });
     await PostStripeBoothPurchases({ itemData, session }).then(async () => {
      const transactionToPost = {
        Paystack_Id: "",
        Stripe_Id: sessionId,
        Currency: session.currency,
        Email: formData.form_email,
        UnitNumber: total,
      };
      await PostTransaction(transactionToPost);
    });
    if (error) console.warn("Stripe BoothCheckout error:", error.message);
  }
};


const PostStripeBoothPurchases = async (boothData) => {
  try {
    const response = await fetch("/api/stripeBooths", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(boothData), // Stringify the object
    });

    const data = await response.json(); // Parse the JSON response
    if (response.ok) {
      console.log("Ticket posted successfully:", data);
    } else {
      console.error("Error posting ticket:", data);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
}