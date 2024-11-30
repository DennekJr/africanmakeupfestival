import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function GET(request) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized: Bearer token missing or invalid" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Extract the Bearer token
    const token = authHeader.split(" ")[1];
    const { searchParams } = new URL(request.url);
    const sponsorName = searchParams.get("sponsor");
    const ticketType = searchParams.get("ticket");
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const dbSponsors = await db.collection("sponsors").find({}).toArray();
    const sponsor = await dbSponsors.find((sponsor) => sponsor.name === sponsorName && sponsor.key === token);
    if (sponsor === undefined) {
      return new Response(JSON.stringify({ error: "Unauthorised sponsor name" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (sponsor.allocatedTickets === sponsor.validatedCodes.length) {
      return new Response(JSON.stringify({ error: "You've reached the maximum amount of sponsors allocated to your company" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    function generateAlphanumericCode(length) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    }

    const code = generateAlphanumericCode(4);
    const SponsosredTicket = {
      sponsorName: sponsor.name,
      code: code,
      allocatedTicketsLeft: sponsor.allocatedTickets - 1,
      ticketType: ticketType,
      createdAt: new Date()
    };
    await db.collection("ticket-codes").insertOne(SponsosredTicket);
    return new Response(JSON.stringify(SponsosredTicket), {
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