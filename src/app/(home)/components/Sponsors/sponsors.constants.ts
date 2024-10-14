import { SponsorType } from "./sponsors.types";

export const SPONSORGIRD_MENU: Record<string, SponsorType> = {
  ruby: {
    id: "ruby",
    name: "Ruby Sponsors",
    disabled: false,
    group: [
      {
        name: "cardtonic",
        src: "images/cardatonic",
        href: "https://cardtonic.com/",
      },
      {
        name: "pressone",
        src: "images/pressone",
        href: "https://pressone.africa/",
      },
    ],
  },
  bronze: {
    id: "bronze",
    name: "Bronze Sponsors",
    disabled: false,
    group: [
      { name: "aws", src: "images/aws", href: "https://aws.amazon.com/" },
      {
        name: "prestmit",
        src: "images/prestmit",
        href: "https://prestmit.io/",
      },
    ],
  },
  supporting: {
    id: "supporting",
    name: "Supporting Sponsors",
    disabled: false,
    group: [
      { name: "eend", src: "images/eend", href: "https://veendhq.com/" },
      { name: "mest", src: "images/mest", href: "https://meltwater.org/" },
    ],
  },
};
