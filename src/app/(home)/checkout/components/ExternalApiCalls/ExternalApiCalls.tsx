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

export const PostBookingConfirmation = async (ticketData: object) => {
  try {
    const response = await fetch("/api/booking-confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ticketData)
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
export const GetBookingConfirmation = async (paystackOrStripeId: object) => {
  try {
    const response = await fetch(`/api/booking-confirmation?id=${paystackOrStripeId}`, {
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
      },
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

export const TransactionExists = async (reference, sessionId, code) => {
  try {
    const response = await fetch(`/api/isReferenceOrSessionIdInDB`, {
      method: "POST",
      body: JSON.stringify({
        reference: reference,
        sessionId: sessionId,
        code: code
      }),
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
export const checkInviteCode = async (inviteCode) => {
  try {
    const response = await fetch(`/api/checkInviteCode`, {
      method: "POST",
      body: JSON.stringify({
        inviteCode: inviteCode
      }),
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
export const UploadSponsoredTicket = async (sponsoredTicket) => {
  try {
    const response = await fetch(`/api/uploadSponsoredTicket`, {
      method: "POST",
      body: JSON.stringify({
        sponsoredTicket: sponsoredTicket
      }),
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
export const GetSponsoredTicket = async (code) => {
  try {
    const response = await fetch(`/api/getSponsoredTicket`, {
      method: "POST",
      body: JSON.stringify({
        code: code
      }),
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

export const GetExistingCampaigns = async () => {
  try {
    const response = await fetch(`/api/getMailingList`, {
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
