import nodemailer from "nodemailer";
// Create transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@africaskincarefestival.com", // Your Zoho email
    pass: ".jvIkum4" // Use an app-specific password from Zoho
  }
});

// Function to send email
export async function sendEmailToZoho(customerEmail, amount, currency) {
  const mailOptions = {
    from: "contact@africaskincarefestival.com",
    to: customerEmail,
    subject: `Here&apos;s your ASF Purchase`,
    html: `<h3>Payment Successful</h3>
               <p>Customer Email: ${customerEmail}</p>
               <p>Amount: ${amount} ${currency}</p>
               <p>Thank you for your purchase!</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to Zoho Mail");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
