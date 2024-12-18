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
    const ticketType = searchParams.get("ticket");
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const dbSponsors = await db.collection("sponsors").find({}).toArray();
    const sponsor = await dbSponsors.find((sponsor) => sponsor.key === token);
    const codes = await db.collection("ticket-codes").find({}).toArray();
    const sponsorGeneratedCodes = codes.filter((code) => code.sponsorName === sponsor.name).length;
    if (sponsor === undefined) {
      return new Response(JSON.stringify({ error: "Unauthorised sponsor" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (sponsor.allocatedTickets === sponsorGeneratedCodes) {
      return new Response(JSON.stringify({ error: "You've reached the maximum amount of sponsors allocated to your company" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    function generateAlphanumericCode(length) {
      const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    }
    const code = generateAlphanumericCode(5);
    const SponsoredTicket = {
      sponsorName: sponsor.name,
      code: code,
      allocatedTicketsLeft: (sponsor.allocatedTickets - sponsorGeneratedCodes) - 1,
      ticketType: ticketType,
      isValidated: false,
      createdAt: new Date()
    };
    await db.collection("ticket-codes").insertOne(SponsoredTicket);
    return new Response(JSON.stringify(SponsoredTicket), {
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
