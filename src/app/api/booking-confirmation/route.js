import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const client = await clientPromise;
    const db = client.db("africamakeupfestival"); // Replace with your database name
    const bookingsUploaded = await db
      .collection("booking-confirmations")
      .find({})
      .toArray();
    const searchedBooking = bookingsUploaded.find(
      (booking) => booking.Paystack_Id === id || booking.Stripe_Id === id
    );
    if (searchedBooking === undefined) {
      return new Response(JSON.stringify({ error: "Unauthorised sponsor" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify(searchedBooking), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Database connection failed" + error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("africamakeupfestival"); // Replace with your database name

    // Get the data from the request body
    const body = await request.json();

    // Insert the new ticket into the collection
    const result = await db.collection("booking-confirmations").insertOne(body);

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to insert data: " + error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
