import mongoose from 'mongoose';
import { MONGO_COLLECTIONS } from "@/app/lib/mongo/mongoCollections";

const Schema = mongoose.Schema;

// Define the schema for TicketType details
const TicketType = new Schema({
  form_firstName: { type: String, required: true },
  form_lastName: { type: String, required: true },
  form_email: { type: String, required: true },
  form_confirmEmail: { type: String, required: true },
  form_organisation: { type: String, required: true },
  form_organisationWebsite: { type: String, required: true },
  form_organisationRole: { type: String, required: true },
  Ticket: { type: String, required: true }, // Default ticket type
  form_phoneNumber: { type: String, required: false },
  form_howDidYouHearAboutEvent: { type: String, required: false },
  form_country: { type: String, required: false }
});

// Define the main schema for Ticket_Purchase
const TicketPurchaseSchema = new Schema({
  Paystack_Id: { type: String, required: true },
  Stripe_Id: { type: String, required: true },
  Access_Code: { type: String, required: true },
  Created_At: { type: Date, required: true },
  TicketDetails: { type: TicketType, required: true },
});

export default mongoose.model(MONGO_COLLECTIONS.TICKET_PURCHASE, TicketPurchaseSchema);