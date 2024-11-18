import express from "express";
import crypto from "crypto";
import { sendEmailToZoho } from "@/app/SendEmail";
import process from "process";

const app = express();
app.post("/api/paystack-webhook", express.json(), async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(401).send("Unauthorized");
  }
  const event = req.body;

  if (event.event === "charge.success") {
    const customerEmail = event.data.customer.email;
    const amount = event.data.amount / 100; // Convert from kobo to Naira
    console.log(amount, event);
    await sendEmailToZoho(customerEmail, amount, event.data.currency); // Example function call
  }

  res.status(200).send("Webhook received");
});