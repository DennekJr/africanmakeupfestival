// This is your test secret API key.
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.stripeCheckoutData,
      success_url: process.env.BASE_URL,
      cancel_url: process.env.BASE_URL + `/ticket`,
    });

    const itemData = items.ticketData;

    // return new Response(JSON.stringify({ session: session, ticketData: items.ticketData }), {
    return new Response(JSON.stringify({ message: 'Transaction initialized successfully', session, itemData }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}