import crypto from "crypto";


export async function POST(req) {
  const secret = process.env.PAYSTACK_SECRET_KEY;

  // Retrieve the request's body
  const event = await req.json();
  const signature = req.headers.get("x-paystack-signature");

  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(event))
    .digest("hex");
  if (hash === signature) {
    // Process the event data here
    console.log("Received event:", event);

    // Return a JSON response with status 200
    return new Response(JSON.stringify({ message: "Event received successfully", event }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } else {
    // If the signature does not match, respond with an error
    return new Response(
      JSON.stringify({ error: "Invalid signature" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
}