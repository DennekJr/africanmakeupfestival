import axios from "axios";

export async function GET(request) {
  try {
    // Parse the request body
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");
    console.log(reference);
    if (!reference) {
      return new Response(
        JSON.stringify({
          message: "Error verifying payment"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    // Initialize Paystack transaction
    const paystackResponse = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: process.env.PAYSTACK_SECRET_KEY
        }
      }
    );

    if (paystackResponse.status === 200) {
      const transactionData = paystackResponse.data.data;
      return new Response(
        JSON.stringify({
          message: "Payment verified successfully",
          transactionData
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Reference not found", transactionData }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error in verification:", error);
    return new Response(
      JSON.stringify({ message: "Paystack verification failed", transactionData }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
  }
}
