import { TicketPurchaseTypes } from "@/app/(home)/ticket/TicketPurchase/ticketPurchase.types";
import {ExplorerTicket, FounderTicket, InvestorTicket, DelegateTicket} from '../../../lib/features/checkout/checkoutSlice'
import { formatCurrency } from "@/app/(home)/checkout/components/utils";

export const TICKETPURCHASEMENU: Record<string, TicketPurchaseTypes> = {
  explorer: {
    id: "explorer",
    title: "Explorer",
    subTitle:
      "Perfect for attendees who wish to explore event activities with no major commitment",
    benefits: [
      "Access to exhibitions",
      "Access to main-stage sessions",
      "Access to any perks from partners",
    ],
    price: "NGN " + formatCurrency(ExplorerTicket),
  },
  founder: {
    id: "founder",
    title: "Founder",
    subTitle: "Perfect for startup founders and co-founders",
    benefits: [
      "Access to exhibitions.",
      "Access to all speaker sessions.",
      "Access to all forums.",
      "Access to spark database to connect with attending investors.",
      "Access to night festival.",
      "Access to Innovator Lounge.",
      "Breakfast only.",
      "Access to available ecosystem mixers (If any)",
    ],
    price: "NGN " + formatCurrency(FounderTicket),
    ticketTag: {
      tagIcon: "/images/emoji-grid/fire.webp",
      tagType: "Most Popular",
    },
  },
  investor: {
    id: "investor",
    title: "Investor",
    subTitle: "Designed for investors or participants eager to connect with attending startups",
    benefits: [
      "Fast-track entry to the event",
      "Access to the exhibition",
      "Priority access to all speaker sessions",
      "Access to all forums",
      "Access to the attending startup database via the Spark portal",
      "Ability to pre-schedule meetings with startups before the event on the Spark portal",
      "Access to the night festival",
      "Meeting room access",
      "AAccess to delegate lounges",
      "Breakfast and lunch included",
      "Access to ecosystem mixers",
    ],
    price: "NGN " + formatCurrency(InvestorTicket),
    ticketTag: {
      tagIcon: "/images/timer.webp",
      tagType: "Most Popular",
    },
  },
delegate: {
    id: "delegate",
    title: "Delegate",
    subTitle: "Perfect for startup founders and co-founders",
    benefits: [
      "Downloadable file of contacts",
      "Access to the exhibition",
      "Priority access to all speaker sessions",
      "Access to all forums",
      "Access to the attending partners' database",
      "Ability to pre-arrange meetings with partners",
      "Access to the night festival",
      "Meeting room access",
      "Access to delegate lounges",
      "Breakfast and lunch included",
      "Access to ecosystem mixers",
    ],
    price: "NGN " + formatCurrency(DelegateTicket),
  },
};
