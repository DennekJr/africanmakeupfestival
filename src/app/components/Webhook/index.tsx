// const SendEventToWebhook = async (eventData) => {
//   try {
//     const response = await fetch("/api/webhook", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(eventData)
//     });
//
//     if (response.ok) {
//       console.log("Event successfully sent to webhook.");
//     } else {
//       console.error("Failed to send event:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error sending event:", error);
//   }
// };
