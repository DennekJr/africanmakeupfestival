import { NavBarItem } from "./navbar.types";

export const NAV_MENU: Record<string, NavBarItem> = {
  home: {
    id: "home",
    route: "/",
    name: "Event",
    disabled: false,
  },
  // speakers2024: {
  //   id: "2024speakers",
  //   route: "/speakers",
  //   name: "2024 speakers",
  //   disabled: false,
  // },
  // exhibitors: {
  //   id: "exhibitors",
  //   route: "/exhibit",
  //   name: "Exhibitors",
  //   icon: ExpandMoreIcon,
  //   disabled: false,
  // },
  sponsor: {
    id: "sponsor",
    route: "/sponsor",
    name: "Sponsors",
    disabled: false,
  },
  program2024: {
    id: "2024-program",
    route: "/program",
    name: "Program",
    disabled: false,
  },
};

export const NAV_BUTTONS: Record<string, NavBarItem> = {
  getTicket: {
    id: "getTicket",
    route: "/ticket",
    name: "Get Ticket",
    disabled: false,
  },
  becomeASponsor: {
    id: "becomeASponsor",
    route: "/sponsor",
    name: "Become A Sponsor",
    disabled: false,
  },
};
