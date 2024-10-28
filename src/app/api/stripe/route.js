// This is your test secret API key.
import { Stripe } from "stripe";
import clientPromise from "../../lib/mongodb";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   const { items } = req.body;
//
//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 5000,
//     currency: "ngn",
//     // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });
//
//   res.send({
//     clientSecret: paymentIntent.client_secret,
//     // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
//     dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
//   });
//
// };

export async function POST(req) {
  try {
    // const { items } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'item 1',
          },
          unit_amount: 1500 * 100,
        },
        quantity: 2,
      }, {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'item 2',
          },
          unit_amount: 1700 * 100,
        },
        quantity: 3,
      }],
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/ticket`,
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}