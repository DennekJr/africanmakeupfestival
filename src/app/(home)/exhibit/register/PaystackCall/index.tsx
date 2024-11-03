import { ExhibitionBoothBillingInfo } from "@/app/lib/features/exhibition/exhibitionSlice";


export const HandlePaystackTransaction = async ({payStackCheckout, boothData}: {boothData: {buyerForm: ExhibitionBoothBillingInfo}, payStackCheckout: {total: number, email: string}}) => {
  try {
    const response = await fetch("/api/paystack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payStackCheckout.email, // Replace with actual customer email
        amount: payStackCheckout.total, // Amount in kobo (Paystack uses kobo for amounts)
        ticketData: boothData
      }),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
      // Redirect user to the Paystack payment URL using data.transactionData.accessCode
    } else {
      console.error("Error initializing transaction:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const HandlePaystackBoothPurhase = async (boothData) => {
    try {
      const response = await fetch("/api/paystackBooths", {
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
  };