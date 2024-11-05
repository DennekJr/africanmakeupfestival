import clientPromise from '../../lib/mongo/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('africamakeupfestival'); // Replace with your database name
    const tickets = await db.collection('exhibitBooths').find({}).toArray();

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
    const result = await db.collection('exhibitBooths').insertOne(body);

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