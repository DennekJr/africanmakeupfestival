import { TicketPurchaseTypes } from "@/app/(home)/ticket/TicketPurchase/ticketPurchase.types";
import { RegularTicket, VIPTicket } from "../../../lib/features/checkout/checkoutSlice";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";

export const TICKETPURCHASEMENU: Record<string, TicketPurchaseTypes> = {
  regular: {
    id: "regular",
    title: "Regular",
    subTitle:
      "Perfect for attendees who wish to explore event activities with no major commitment",
    benefits: [
      "Access to exhibitions",
      "Access to main-stage sessions",
      "Access to any perks from partners",
    ],
    price: "NGN " + formatCurrency(RegularTicket)
  },
  vip: {
    id: "vip",
    title: "VIP",
    subTitle: "Unlock Premium Perks and Privileges.",
    benefits: [
      "Access to the exhibitors",
      "Priority access to all sessions",
      "Access to all forums",
      "Access to the night festival",
      "Access to Vip lounges"
    ],
    price: "NGN " + formatCurrency(VIPTicket)
  },
};
