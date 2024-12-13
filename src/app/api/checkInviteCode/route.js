import clientPromise from "@/app/lib/mongo/mongodb.js";

export async function POST(request) {
  try {
    const { inviteCode } = await request.json();

    // Extract the Bearer token
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const codes = await db.collection("ticket-codes").find({}).toArray();
    const codeFound = codes.find((code) => code.code === inviteCode);
    if (!codeFound) {
      return new Response(JSON.stringify(false), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    await db.collection("ticket-codes").updateOne(
      { code: inviteCode }, // Filter to find the document
      {
        $set: {
          status: "used",
          updatedAt: new Date()
        }
      }
    );

    return new Response(JSON.stringify(codeFound), {
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
