import axios from "axios";

export async function POST() {
  try {
    // Parse the request body

    // const authCode = await axios.post("https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.17NJQUTTFJLS32PZBKJ3GBKD0G0OZR&scope=ZohoCampaigns.contact.ALL&redirect_uri=https://africaskincarefestival.com/&access_type=offline");
    // // https://africaskincarefestival.com/?code=1000.10f7b4cf4a9541849ac22f0dfc4e8cb7.c9498b84aaa4f616ffdfeab4517f4eaa&location=us&accounts-server=https%3A%2F%2Faccounts.zoho.com&
    // const getAccessTokenWithCode = await axios.post(`https://accounts.zoho.com/oauth/v2/token?code=1000.10f7b4cf4a9541849ac22f0dfc4e8cb7.c9498b84aaa4f616ffdfeab4517f4eaa&client_id=1000.17NJQUTTFJLS32PZBKJ3GBKD0G0OZR&client_secret=3556e7f5508279bd806db80a52bf17265bc2ff6c9a&redirect_uri=https://africaskincarefestival.com/&grant_type=authorization_code`);
    // const getCampaignList = await axios.get(`https://campaigns.zoho.com/api/v1.1/updatelistdetails?resfmt=JSON&listkey=[listkey]&newlistname=[give list name]&signupform=public`);
    // // Check if the request to Paystack was successful
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