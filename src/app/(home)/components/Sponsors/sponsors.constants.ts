import { SponsorType } from "./sponsors.types";

export const SPONSORGIRD_MENU: Record<string, SponsorType> = {
  ruby: {
    id: "ruby",
    name: "Ruby Sponsors",
    disabled: false,
    group: [
      {
        name: "cardtonic",
        src: "/images/cardatonic.png",
        href: "https://cardtonic.com/",
      },
      {
        name: "pressone",
        src: "/images/pressone.png",
        href: "https://pressone.africa/",
      },
    ],
  },
  bronze: {
    id: "bronze",
    name: "Bronze Sponsors",
    disabled: false,
    group: [
      { name: "aws", src: "/images/aws.png", href: "https://aws.amazon.com/" },
      {
        name: "prestmit",
        src: "/images/prestmit.png",
        href: "https://prestmit.io/",
      },
    ],
  },
  supporting: {
    id: "supporting",
    name: "Supporting Sponsors",
    disabled: false,
    group: [
      { name: "eend", src: "/images/eend.png", href: "https://veendhq.com/" },
      { name: "mest", src: "/images/mest.png", href: "https://meltwater.org/" },
    ],
  },
};
