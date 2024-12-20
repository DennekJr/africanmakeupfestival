import clientPromise from "../../lib/mongo/mongodb";
export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("africaskincarefestival"); // Replace with your database name
    // Get the data from the request body
    const {itemData, session} = await request.json();
    const formDetail = Object.values(itemData.billingForm);
    // Object.values(ticketData.billingForm).map(async (booth) => {
      const buyerTicketPurchaseDetails = {
        form_booth: formDetail[0],
        form_companyName: formDetail[1],
        form_contactName: formDetail[2],
        form_jobTitle: formDetail[3],
        form_phoneNumber: formDetail[4],
        form_country: formDetail[5],
        form_email: formDetail[6],
        form_industry: formDetail[7],
        form_briefDescription: formDetail[8],
        form_howDidYouHearAboutEvent: formDetail[9]

      }
      const BuyerTicketPurchase = {
        Paystack_Id: '',
        Stripe_Id: session.id,
        Access_Code: '',
        Created_At: new Date(),
        TicketDetails: buyerTicketPurchaseDetails,
      };
    await db.collection("booth-purchases").insertOne(BuyerTicketPurchase);
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