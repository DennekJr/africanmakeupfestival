import { FooterItem } from "./footer.types";

export const FOOTER_MENULINKS: Record<string, FooterItem> = {
  navigate: {
    id: "navigate",
    route: "",
    name: "Navigate",
    subLinks: [
      { id: "getATicket", name: "Get a Ticket", route: "/ticket" },
      { id: "home", name: "Event", route: "/" },
      // { id: "2024speakers", name: "Speakers", route: "/speakers" },
      // { id: "exhibit", name: "Exhibit", route: "/exhibit" },
      { id: "sponsor", name: "Sponsors", route: "/sponsor" },
      { id: "2024program", name: "Programs", route: "/program" },
    ],
    disabled: false,
  },
  ourEvents: {
    id: "ourEvents",
    route: "",
    name: "Our Events",
    subLinks: [
      { id: "africaSkincare", name: "Africa Skincare", route: "/" },
    ],
    disabled: false,
  },
  // eventGuide: {
  //   id: "eventGuide",
  //   route: "",
  //   name: "Event Guide",
  //   subLinks: [
  //     { id: "applyToSpeak", name: "Apply to Speak", route: "" },
  //     { id: "contactUs", name: "Contact Us", route: "/contactus" },
  //   ],
  //   disabled: false,
  // },
  connect: {
    id: "connect",
    route: "",
    name: "Connect",
    subLinks: [
      { id: "instagram", name: "Instagram", route: "https://www.instagram.com/africaskincarefestival?igsh=MXAzcmxjaDd6NnAwNQ==" },
      { id: "tiktok", name: "TikTok", route: "https://www.tiktok.com/@africaskincarefestival?_t=8rgnTxK4KDW&_r=1" },
    ],
    disabled: false,
  },
};
