// This is your test secret API key.
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body
    console.log(items);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.stripeCheckoutData,
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/ticket`,
    });

    const ticketData = items.ticketData;

    // return new Response(JSON.stringify({ session: session, ticketData: items.ticketData }), {
    return new Response(JSON.stringify({ message: 'Transaction initialized successfully', session, ticketData }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}