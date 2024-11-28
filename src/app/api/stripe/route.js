// This is your test secret API key.
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { items } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body
    let metadata = {};
    if (items.purchaseType === "ticket") {
      const otherForms = Object.entries(items.ticketData.otherTicketForms).filter(([key, values]) => key !== "data" && key !== "id" && values !== "").map(([key, values]) => {
        // Remove the unwanted fields from the values object
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { form_confirmEmail, ...rest } = values;
        return [key, rest];
      });
      metadata = {
        "buyerForm": JSON.stringify(items.ticketData.buyerForm),
        "otherTicketForms": JSON.stringify(otherForms),
        "tickets": JSON.stringify(items.tickets),
        "type": "ticket"
      };
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "link"],
      mode: 'payment',
      currency: "NGN",
      line_items: items.stripeCheckoutData,
      success_url: process.env.BASE_URL + "success?payment=stripe&sessionId={CHECKOUT_SESSION_ID}",
      cancel_url: process.env.BASE_URL + `ticket`,
      metadata: metadata
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