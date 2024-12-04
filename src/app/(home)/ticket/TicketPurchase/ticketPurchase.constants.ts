import { TicketPurchaseTypes } from "@/app/(home)/ticket/TicketPurchase/ticketPurchase.types";
import { RegularTicket, VIPTicket } from "../../../lib/features/checkout/checkoutSlice";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";

export const TICKETPURCHASEMENU: Record<string, TicketPurchaseTypes> = {
  regular: {
    id: "regular",
    title: "Regular",
    subTitle:
      "This ticket is perfect for anyone looking to experience the Africa Skincare Festival and discover the best of African skincare in an exciting and interactive environment!",
    benefits: [
      "Full Access to the Exhibition Area: Explore a variety of booths showcasing top skincare brands and products",
      "Live Demonstrations: Witness product demos and learn skincare tips directly from experts",
      "Product Sampling: Try out samples of innovative skincare products from featured brands.",
      "Panel discussions: Attend select sessions focused on skincare routines, trends, and beauty business secrets.",
      "Networking Opportunities: Connect with like-minded skincare enthusiasts and discover new brands.",
      "Access to Night Festival"
    ],
    price: "NGN " + formatCurrency(RegularTicket)
  },
  vip: {
    id: "vip",
    title: "VIP",
    subTitle: "This ticket is perfect for those looking to elevate their festival experience and enjoy VIP-level access to everything the Africa Skincare Festival has to offer!",
    benefits: [
      "Fast-Track Entry: Skip the lines and enjoy priority access to the event.",
      "Exclusive VIP Lounge Access: Relax and network in a dedicated lounge with complimentary refreshments.",
      "Reserved Seating: Enjoy priority seating at all keynote speeches, panel discussions, and workshops",
      "VIP Gift Bag: Receive a luxury gift bag filled with exclusive skincare products, samples, and goodies from leading brands",
      "Personalized Skincare Consultations: Get one-on-one advice from top skincare experts.",
      "Exclusive Networking Opportunities: Connect with industry leaders, brand founders, and influencers in an intimate setting.",
      "Access to Night Festival"
    ],
    price: "NGN " + formatCurrency(VIPTicket)
  },
};
