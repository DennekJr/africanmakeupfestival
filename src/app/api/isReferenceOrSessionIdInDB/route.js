import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function POST(request) {
  try {
    const { sessionId, reference } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const dbTransactions = await db.collection("transactions").find({}).toArray();
    const transaction = await dbTransactions.find((dbTransaction) => dbTransaction.Paystack_Id === reference || dbTransaction.Stripe_Id === sessionId);
    if (transaction === undefined) {
      return new Response(JSON.stringify(false), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(transaction), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Database connection failed" + error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}