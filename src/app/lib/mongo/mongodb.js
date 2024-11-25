import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;
let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so the MongoClient is not created multiple times
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    console.log("client", client);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new MongoClient each time
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
