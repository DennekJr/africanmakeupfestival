import mongoose from 'mongoose';
import { MONGO_COLLECTIONS } from "@/app/lib/mongo/mongoCollections";

const Schema = mongoose.Schema;

const TicketTypeSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
});
export default mongoose.model(MONGO_COLLECTIONS.TICKET, TicketTypeSchema);