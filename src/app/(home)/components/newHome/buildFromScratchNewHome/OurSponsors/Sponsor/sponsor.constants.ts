import {
  SponsorType
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurSponsors/Sponsor/sponsors.types";

export const SPONSORCONSTANTS:Record<string, SponsorType> = {
  one: {
    id: 'piggyvest',
    title: 'Piggyvest',
    content: 'Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua.',
    url: '/',
    image: '/images/piggyvest.webp'
  },
two: {
    id: 'medplus',
    title: 'MedPlus',
    content: 'Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore magna aliqua.',
    url: '/',
    image: '/images/medPlus.webp'
  }
}