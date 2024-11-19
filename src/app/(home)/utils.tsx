import axios from "axios";

export const verifyPaystackPayment = async (reference) => {
  try {
    const response = await axios.get(`/api/verify-payment?reference=${reference}`);
    if (response.status === 200) {
      console.log("Transaction verified:", response.data);
      return response.data;
    } else {
      console.error("Verification failed:", response.data.error);
    }
  } catch (error) {
    console.error("Error in verification:", error);
  }
};
