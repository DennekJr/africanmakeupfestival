import {
  SponsorType
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurSponsors/Sponsor/sponsors.types";

export const SPONSORCONSTANTS:Record<string, SponsorType> = {
  one: {
    id: 'piggyvest',
    title: 'Piggyvest',
    content: "Empowering growth, we celebrate innovation and self-care at the Skincare Festival.",
    url: "/sponsor",
    image: '/images/piggyvest.webp'
  },
two: {
    id: 'medplus',
  title: "Rejuvenee",
  content: "Rejuvenee proudly champions wellness and innovation, supporting events that inspire and empower",
  url: "/sponsor",
  image: "/images/sponsor/Rejuvenee-new-logo.webp"
},
  three: {
    id: "pocket",
    title: "Pocket",
    content: "Pocket is excited to support creativity and innovation, empowering connections that inspire growth.",
    url: "/sponsor",
    image: "/images/sponsor/pocket.svg"
  }
}