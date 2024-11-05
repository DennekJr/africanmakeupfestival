import clientPromise from '../../lib/mongo/mongodb';
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('AfricaMakeupFestival'); // Replace with your database name
    const tickets = await db.collection('Ticket-Purchases').find({}).toArray();

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
    const db = client.db('AfricaMakeupFestival'); // Replace with your database name
    // Get the data from the request body
    const {ticketData, session} = await request.json();
    Object.values(ticketData.buyerForm).map(async (detail) => {
      const TicketName = Object.keys(ticketData.buyerForm)[0];
      const buyerTicketPurchaseDetails = {
        form_firstName: detail[0][0].value,
        form_lastName: detail[0][1].value,
        form_email: detail[0][4].value,
        form_confirmEmail: detail[0][5].value,
        form_organisation: detail[0][6].value,
        form_organisationWebsite: detail[0][7].value,
        form_organisationRole: detail[0][8].value,
        Ticket: TicketName.toUpperCase(), // Default ticket type
        form_phoneNumber: detail[0][2].value,
        form_howDidYouHearAboutEvent: detail[0][9].value,
        form_country: detail[0][3].value
      }
      const BuyerTicketPurchase = {
        Paystack_Id: session.reference,
        Stripe_Id: '',
        Access_Code: session.access_code,
        Created_At: new Date(),
        TicketDetails: buyerTicketPurchaseDetails,
      };
      await db.collection('Ticket-Purchases').insertOne(BuyerTicketPurchase);
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