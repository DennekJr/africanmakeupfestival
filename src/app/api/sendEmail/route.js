// // import sgMail from "@sendgrid/mail";
// //
// // export async function POST() {
// //   try {
// //     sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// //     const msg = {
// //       to: 'ohirikennedy@yahoo.com',
// //       from: 'ohirikennedy96@gmail.com',
// //       subject: 'Sending with Twilio SendGrid is Fun',
// //       text: 'and easy to do anywhere, even with Node.js',
// //       html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// //     };
// //     await sgMail.send(msg);
// //
// //     return new Response(JSON.stringify('Email sent'), {
// //       status: 201,
// //       headers: { 'Content-Type': 'application/json' },
// //     });
// //   } catch (error) {
// //     return new Response(JSON.stringify({ error: 'Failed to insert data: ' + error }), {
// //       status: 500,
// //       headers: { 'Content-Type': 'application/json' },
// //     });
// //   }
// // }
//
//
// import nodemailer from "nodemailer";
// // Create transporter using Zoho SMTP
// const transporter = nodemailer.createTransport({
//   host: "smtp.zoho.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "contact@africaskincarefestival.com", // Your Zoho email
//     pass: ".jvIkum4", // Use an app-specific password from Zoho
//   },
// });
//
// // Function to send email
// export async function sendEmailToZoho(customerEmail, amount, currency) {
//   const mailOptions = {
//     from: "contact@africaskincarefestival.com",
//     to: customerEmail,
//     subject: `Here&apos;s your ASF Purchase`,
//     html: `<h3>Payment Successful</h3>
//                <p>Customer Email: ${customerEmail}</p>
//                <p>Amount: ${amount} ${currency}</p>
//                <p>Thank you for your purchase!</p>`,
//   };
//
//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully to Zoho Mail");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }

import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const get0AuthToken = async () => {
  try {
    const response = await fetch(`https://accounts.zoho.com/oauth/v2/auth?scope=ZohoMail.messages.ALL&client_id=1000.PJBB1HIDL97UR4YEFRTBJ8KTXQCRUF&response_type=code&access_type=offline&redirect_uri=https://africaskincarefestival.com/`, {
      method: "GET"
    });

    const data = await response.json(); // Parse the JSON response

    if (response.ok) {
      console.log("Token obtained successfully:", data);
      return data;
    } else {
      console.error("Error posting ticket:", data);
    }
  } catch (error) {
    console.error("Request failed:", error);
  }
};

// Create transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL_USER,
    pass: process.env.ZOHO_EMAIL_PASSWORD
  },
  debug: true,
  logger: true,
  tls: {
    rejectUnauthorized: false // Allow unauthorized certs (for local dev)
  }
});

// Function to send email
export async function POST(request) {
  try {
    const { email, amount, currency } = await request.json();

    const mailOptions = {
      from: process.env.ZOHO_EMAIL_USER,
      to: email,
      subject: `Here's your ASF Purchase`,
      html: `<h3>Payment Successful</h3>
               <p>Customer Email: ${email}</p>
               <p>Amount: ${amount} ${currency}</p>
               <p>Thank you for your purchase!</p>`
    };

    // Send the email using Nodemailer
    const res = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to Zoho Mail", res);

    return new Response(
      JSON.stringify({
        message: "Email sent successful"
      }),
      {
        status: 200
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email: " + error.message
      }),
      {
        status: 500
      }
    );
  }
}
