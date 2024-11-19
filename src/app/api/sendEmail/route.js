import nodemailer from "nodemailer";

// Create transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@africaskincarefestival.com",
    pass: "9CPW hPEP MXS4"
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
    const { email, template } = await request.json();

    const mailOptions = {
      from: process.env.ZOHO_EMAIL_USER,
      to: email,
      subject: `Here's your ASF Purchase`,
      html: template,
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
