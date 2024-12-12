import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function POST(request) {
  try {
    const { code } = await request.json(); // Assuming you're sending 'email' and 'amount' in the request body
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const sponsoredTickets = await db.collection("sponsored-tickets").find({}).toArray();
    const sponsoredTicket = await sponsoredTickets.find((sponsoredTicket) => sponsoredTicket.code === code);
    if (sponsoredTicket === undefined) {
      return new Response(JSON.stringify("No ticket found"), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(sponsoredTicket), {
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