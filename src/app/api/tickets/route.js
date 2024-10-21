import clientPromise from '../../lib/mongodb';

// export default async function handler(req, res) {
//   try {
//     const client = await clientPromise;
//     const db = client.db('myDatabase'); // Replace with your database name
//
//     switch (req.method) {
//       case 'POST':
//         const { ticketName } = req.body;
//         const newTicket = await db.collection('tickets').insertOne({ name: ticketName });
//         res.status(201).json(newTicket);
//         break;
//       case 'GET':
//         const tickets = await db.collection('tickets').find({}).toArray();
//         res.status(200).json(tickets);
//         break;
//       default:
//         res.setHeader('Allow', ['GET', 'POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Database connection failed' + error });
//   }
// }

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('africamakeupfestival'); // Replace with your database name
    const tickets = await db.collection('tickets').find({}).toArray();

    return new Response(JSON.stringify(tickets), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Database connection failed' + error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('africamakeupfestival'); // Replace with your database name

    // Get the data from the request body
    const body = await request.json();

    // Insert the new ticket into the collection
    const result = await db.collection('tickets').insertOne(body);

    return new Response(JSON.stringify(result), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to insert data: ' + error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// export async function DELETE(request) {
//   // Handle DELETE request
// }