"use client";
import { useEffect } from "react";

export default function PaymentCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get("reference");

    if (reference) {
      verifyPayment(reference);
    }
  }, []);

  const verifyPayment = async (reference) => {
    try {
      const response = await fetch(`/api/verifyCallback?reference=${reference}`);
      const data = await response.json();

      if (data.transaction && data.transaction.status === "success") {
        console.log("Payment successful:", data.transaction);
      } else {
        console.error("Payment verification failed:", data);
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  return <div>Processing payment...</div>;
}
