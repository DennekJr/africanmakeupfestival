import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name

    // Get the data from the request body
    const body = await request.json();

    // Insert the new ticket into the collection
    const result = await db.collection("sponsored-tickets").insertOne(body.sponsoredTicket);

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to insert data: " + error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
