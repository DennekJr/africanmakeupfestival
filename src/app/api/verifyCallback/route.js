import axios from "axios";

export async function GET(request) {
  const url = new URL(request.url);
  const reference = url.searchParams.get("reference");

  if (!reference) {
    return new Response(JSON.stringify({ error: "No reference found" }), {
      status: 400
    });
  }

  try {
    // Verify the payment with Paystack
    const verifyResponse = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
      }
    );

    const transaction = verifyResponse.data.data;

    if (transaction.status === "success") {
      // Payment was successful
      console.log("Payment verified:", transaction);
      return new Response(
        JSON.stringify({ message: "Payment verified", transaction }),
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
