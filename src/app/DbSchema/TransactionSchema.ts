import mongoose from 'mongoose';
import { MONGO_COLLECTIONS } from "@/app/lib/mongo/mongoCollections";

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  Paystack_Id: { type: String, required: true },
  Stripe_Id: { type: String, required: true },
  Currency: { type: String, required: true },
  Ticket: { type: String, required: true },
  Email: { type: String, required: true },
  UnitAmount: { type: Number, required: true },
});

export default mongoose.model(MONGO_COLLECTIONS.TRANSACTION, TransactionSchema);