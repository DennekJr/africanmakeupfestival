import clientPromise from "@/app/lib/mongo/mongodb.js";

export default async function handler(req, res) {
  const bearerKey = req.headers.authorization?.split(" ")[1]; // Extract the Bearer key from the Authorization header
  const client = await clientPromise;
  const db = client.db("africaskincarefestival"); // Replace with your database name
  const sponsors = await db.collection("sponsors").find({}).toArray();
  console.log(sponsors);
  // Compare with stored Bearer key
  if (bearerKey !== process.env.BEARER_KEY) {
    return res.status(403).json({ error: "Access denied: Invalid Bearer key" });
  }

  // Example data to return if the key is valid
  const secureInfo = {
    message: "Access granted",
    data: {
      sponsors: [
        { id: 1, name: "Sponsor A" },
        { id: 2, name: "Sponsor B" }
      ]
    }
  };

  res.status(200).json(secureInfo);
}

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