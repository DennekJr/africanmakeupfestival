import axios from "axios";

export async function POST() {
  try {
    if (response.status === 200) {
      return new Response(JSON.stringify({
        message: "Transaction initialized successfully",
        response
      }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({ error: "Failed to initialize Paystack transaction" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Failed to initialize transaction" + error }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

export async function GET() {
  try {
    const response = await axios.get(`https://campaigns.zoho.com/api/v1.1/getcampaigndetails?&campaignkey=3z7c30a055325ba9e71d6de851ab602379e2163a174bb5de0abee079da9140fa94&authtoken=f1754e073c3a4d3c537c5f56d258dd348c8a956e53&scope=Zohocampaigns.campaign.READ`, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Zoho-oauthtoken f1754e073c3a4d3c537c5f56d258dd348c8a956e53`
      }
    });

    console.log(response.data);
    // return response.data;
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching mailing lists:", error);
  }
}
//
// const createMailingList = async () => {
//   const url = "https://campaigns.zoho.com/api/v1.1/lists";
//   const token = "<your_access_token>"; // Replace with your OAuth token
//
//   const data = {
//     list_name: "New Subscribers",
//     description: "Mailing list for new subscribers.",
//     create_type: "Private" // Options: 'Public' or 'Private'
//   };
//
//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         Authorization: `Zoho-oauthtoken ${token}`,
//         "Content-Type": "application/json"
//       }
//     });
//
//     console.log("Mailing list created successfully:", response.data);
//   } catch (error) {
//     console.error("Error creating mailing list:", error.response?.data || error.message);
//   }
// };