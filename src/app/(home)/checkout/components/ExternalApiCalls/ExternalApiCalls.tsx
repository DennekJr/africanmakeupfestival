import axios from "axios";

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
      console.log("Ticket posted successfully:");
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
      console.log("Ticket posted successfully:");
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
      console.log("Ticket posted successfully");
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
  };
  tickets: { ticketName: string; value: number }[];
};

export const initiatePaystackTransaction = async ({
                                                    payStackCheckout,
                                                    ticketData,
                                                    tickets
                                                  }: ticketPurchaseDataType) => {
  try {
    const purchaseType = "ticket";
    const response = await fetch("/api/paystack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payStackCheckout.email, // Replace with actual customer email
        amount: payStackCheckout.total, // Amount in kobo (Paystack uses kobo for amounts)
        ticketData: { payStackCheckout, ticketData, tickets, purchaseType }
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
      console.log("Email sent successfully to Zoho Mail");
    } else {
      console.error("Error sending email:", data);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
export const sendContactUsEmail = async (email, template) => {
  try {
    const response = await fetch("/api/contactUs", {
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
      console.log("Email sent successfully to Zoho Mail");
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

export const GetAllCampaignLists = async () => {
  try {
    const response = await fetch(`/api/generateZeroAuthToken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    if (response.ok) {
      return data;
      // Redirect user to the Paystack payment URL using data.transactionData.accessCode
    } else {
      console.error("Error pulling campaign lists:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
export const CreateCampaignList = async () => {
  const url = "https://campaigns.zoho.com/api/v1.1/lists";
  const token = "f1754e073c3a4d3c537c5f56d258dd348c8a956e53"; // Replace with your OAuth token

  const data = {
    list_name: "New Subscribers",
    description: "Mailing list for new subscribers.",
    create_type: "Private" // Options: 'Public' or 'Private'
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Zoho-oauthtoken ${token}`,
        ContentType: "application/json"
      }
    });

    console.log("Mailing list created successfully:", response.data);
  } catch (error) {
    console.error(
      "Error creating mailing list:",
      error.response?.data || error.message
    );
  }
};

export const VerifyStripeTransaction = async (stripeId) => {
  try {
    const response = await fetch(`/api/verify-stripe?sessionId=${stripeId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data.transactionData;
    } else {
      console.error("Error initializing transaction:", data);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const TransactionExists = async (reference, sessionId) => {
  try {
    const response = await fetch(`/api/isReferenceOrSessionIdInDB`, {
      method: "POST",
      body: JSON.stringify({
        reference: reference,
        sessionId: sessionId
      }),
      headers: {
        "Content-Type": "application/json"
      }
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
