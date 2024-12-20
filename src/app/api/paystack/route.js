import axios from 'axios';
import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function POST(request) {
  try {
    // Parse the request body
    const client = await clientPromise;
    const db = client.db("africaskincarefestival");
    const { email, amount, ticketData } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body

    // Initialize Paystack transaction
    const paystackResponse = await axios.post('https://api.paystack.co/transaction/initialize', {
      email: email,
      amount: amount,
      callback_url: process.env.BASE_URL + "success",
      metadata: ticketData
    }, {
      headers: {
        'Authorization': process.env.PAYSTACK_SECRET_KEY, // Replace with your Paystack secret key
        'Content-Type': 'application/json',
      }
    });
    const bookingConfirmation = {
      Paystack_Id: paystackResponse.data.data.reference,
      Stripe_Id: "",
      Created_At: new Date(),
      TicketDetails: ticketData
    };
    await db.collection("booking-confirmations").insertOne(bookingConfirmation);
    // Check if the request to Paystack was successful
    if (paystackResponse.status === 200) {
      const paystackData = paystackResponse.data;
      const transactionData = paystackResponse.data.data;
      return new Response(JSON.stringify({
        message: "Transaction initialized successfully",
        paystackData,
        transactionData,
        ticketData
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Failed to initialize Paystack transaction' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to initialize transaction' + error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
