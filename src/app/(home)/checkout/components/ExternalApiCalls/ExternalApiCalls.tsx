import { TicketBilingInfo } from "@/app/lib/features/checkout/checkoutSlice";

export const PostPaystackTicketPurchases = async (ticketData) => {
  try {
    const response = await fetch("/api/paystackTickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketData), // Stringify the object
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

export const PostStripeTicketPurchases = async (ticketData) => {
  try {
    const response = await fetch("/api/stripeTickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketData), // Stringify the object
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

export const PostTransaction = async (ticketData) => {
  try {
    const response = await fetch("/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketData), // Stringify the object
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

type ticketPurchaseDataType = {
  payStackCheckout: { email: string; total: number };
  ticketData: {
    buyerForm: { [ticket: string]: { name: string; value: string }[] };
    otherTicketForms: { id: string; data: TicketBilingInfo };
  };
  tickets: { ticketName: string; value: number }[];
};

export const initiatePaystackTransaction = async ({
                                                    payStackCheckout,
                                                    ticketData,
                                                    tickets
                                                  }: ticketPurchaseDataType) => {
  try {
    const response = await fetch("/api/paystack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payStackCheckout.email, // Replace with actual customer email
        amount: payStackCheckout.total, // Amount in kobo (Paystack uses kobo for amounts)
        ticketData: { payStackCheckout, ticketData, tickets }
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

export const sendEmail = async (email, template) => {
  try {
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        template: template
      }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log("Email sent successfully to Zoho Mail", data);
    } else {
      console.error("Error sending email:", data);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export const VerifyPaystackTransaction = async (reference) => {
  try {
    const response = await fetch(`/api/verify-payment?reference=${reference}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
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
