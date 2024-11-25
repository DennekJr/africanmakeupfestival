import clientPromise from "../../lib/mongo/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const tickets = await db.collection("ticket-types").find({}).toArray();

    return new Response(JSON.stringify(tickets), {
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
