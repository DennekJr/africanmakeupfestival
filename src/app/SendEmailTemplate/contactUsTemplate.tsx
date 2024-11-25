export const ContactUsTemplate = ({
                                    name,
                                    content
                                  }: {
  name: string;
  content: string;
}) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact us form</title>
  <style>
    .table {
    border: 1px solid #d1d5db; /* Replace with the lightSecondary color */
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .boldFont {
    font-weight: bold;
  }
  .textAlign {
    text-align: right;
  }
  </style>
</head>
<body>
<div>
<img src="https://africaskincarefestival.com/images/Email_Logo.png" style="height: auto; width: 100%" alt="asf logo" />
<h3>Thank you for your <span style="color: #C43C2A">#ASF</span> purchase!</h3>
<h4>Message from ${name},</h4>
<p>${content}</p>
</div>
</body>
</html>
`;
};
