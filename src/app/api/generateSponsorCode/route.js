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
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const tickets = await db.collection("sponsors").find({}).toArray();
    console.log(tickets);

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