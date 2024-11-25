import nodemailer from "nodemailer";

// Create transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@africaskincarefestival.com",
    pass: "f4R2vd,DAX!y7A$"
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
      from: "no-reply@africaskincarefestival.com",
      to: "contact@africaskincarefestival.com",
      subject: `Get in Touch with ${email}`,
      html: template
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
