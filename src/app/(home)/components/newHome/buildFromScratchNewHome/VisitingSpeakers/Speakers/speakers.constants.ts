import {
  SpeakerType
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/VisitingSpeakers/Speakers/speakers.types";
import { FacebookOutlined, Instagram, SportsBasketball, Twitter } from "@mui/icons-material";

export const SPEAKERSCONSTANTS:Record<string, SpeakerType> = {
  one: {
    id: 'fenty',
    name: 'Bruce Taylor',
    position: 'Manager',
    image: "/images/visitingSpeakers/speakerZero.webp",
    socialMedia: [
      {id: 'FacebookOutlined', url: '/', icon: FacebookOutlined, delay: 100},
      {id: 'instagram', url: '/', icon: Instagram, delay: 150},
      {id: 'dribble', url: '/', icon: SportsBasketball, delay: 200},
      {id: 'twitter', url: '/', icon: Twitter, delay: 250}
    ],
  },
two: {
    id: 'fenty',
    name: 'Bruce Taylor',
    position: 'Manager',
  image: "/images/visitingSpeakers/speakerOne.webp",
    socialMedia: [
      {id: 'FacebookOutlined', url: '/', icon: FacebookOutlined, delay: 100},
      {id: 'instagram', url: '/', icon: Instagram, delay: 150},
      {id: 'dribble', url: '/', icon: SportsBasketball, delay: 200},
      {id: 'twitter', url: '/', icon: Twitter, delay: 250}
    ],
  },
three: {
    id: 'corsx',
    name: 'Bruce Taylor',
    position: 'Manager',
  image: "/images/visitingSpeakers/speakerZero.webp",
    socialMedia: [
      {id: 'FacebookOutlined', url: '/', icon: FacebookOutlined, delay: 100},
      {id: 'instagram', url: '/', icon: Instagram, delay: 150},
      {id: 'dribble', url: '/', icon: SportsBasketball, delay: 200},
      {id: 'twitter', url: '/', icon: Twitter, delay: 250}
    ],
  }
}