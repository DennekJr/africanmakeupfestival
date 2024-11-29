import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function GET() {
  try {
    // const authHeader = req.headers.get('Authorization');
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //   return new Response(JSON.stringify({ error: 'Unauthorized: Bearer token missing or invalid' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    // }

    // Extract the Bearer token
    // const token = authHeader.split(' ')[1];
    const { searchParams } = new URL(request.url);
    const sponsorName = searchParams.get("sponsor");
    const ticketType = searchParams.get("ticket");
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const dbSponsors = await db.collection("sponsors").find({}).toArray();
    const sponsor = await dbSponsors.find((sponsor) => sponsor.name === "piggyvest");
    console.log("tickets", sponsor);

    console.log("SPONSORS", sponsor, dbSponsors, sponsorName, ticketType);

    return new Response(JSON.stringify({ sponsor: sponsor, name: sponsorName, ticketName: ticketType }), {
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