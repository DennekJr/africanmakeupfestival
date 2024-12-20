import clientPromise from '../../lib/mongo/mongodb';
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    const tickets = await db.collection("ticket-purchases").find({}).toArray();

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
    const db = client.db("africaskincarefestival"); // Replace with your database name
    // Get the data from the request body
    const { data, sessionId } = await request.json();
    Object.values(data.ticketData.buyerForm).map(async (detail) => {
      const TicketName = Object.keys(data.ticketData.buyerForm)[0];
      const buyerTicketPurchaseDetails = {
        form_firstName: detail[0].value,
        form_lastName: detail[1].value,
        form_email: detail[4].value,
        form_confirmEmail: detail[5].value,
        Ticket: TicketName.toUpperCase(), // Default ticket type
        form_phoneNumber: detail[2].value,
        form_country: detail[3].value
      }
      const BuyerTicketPurchase = {
        Paystack_Id: '',
        Stripe_Id: sessionId,
        Access_Code: '',
        Created_At: new Date(),
        TicketDetails: buyerTicketPurchaseDetails,
        Tickets: data.tickets
      };
      await db.collection("ticket-purchases").insertOne(BuyerTicketPurchase);
    });
    // Array to add other ticket forms
    return new Response(JSON.stringify('Data successfully added to Ticket-Purchases'), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
    // Insert the new ticket into the collection
    // const result = await db.collection('paystackTickets').insertOne(body);
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to insert data: ' + error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}