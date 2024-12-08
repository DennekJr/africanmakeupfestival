import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(`https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=1000.YTOUTEYTTTJBD9V9JW5R77TW1DF86N&scope=ZohoCampaigns.lists.READ&redirect_uri=https://africaskincarefestival.com/&access_type=offline&prompt=consent`);

    console.log(response.data);
    // return response.data;
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching mailing lists:", error.response?.data || error.message);
  }
}