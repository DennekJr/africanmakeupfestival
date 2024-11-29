import axios from "axios";

export async function GET(request) {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");
  console.log(sessionId, request.url);

  if (!sessionId) {
    return new Response(JSON.stringify({ error: "No stripe session found" }), {
      status: 400
    });
  }

  try {
    // Verify the payment with Paystack
    const verifyResponse = await axios.get(
      `https://api.stripe.com/v1/checkout/sessions/${sessionId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`
        }
      }
    );
    const transaction = await verifyResponse;
    if (transaction.status === 200) {
      // Payment was successful
      const transactionData = transaction.data;
      return new Response(
        JSON.stringify({ message: "Payment verified", transactionData }),
        { status: 200 }
      );
    } else {
      // Payment failed or is pending
      console.log("Payment not successful:", transaction);
      return new Response(
        JSON.stringify({ message: "Payment not successful", transaction }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    return new Response(
      JSON.stringify({ error: "Failed to verify payment" }),
      { status: 500 }
    );
  }
}
