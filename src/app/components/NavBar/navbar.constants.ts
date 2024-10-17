import { NavBarItem } from "./navbar.types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const NAV_MENU: Record<string, NavBarItem> = {
  home: {
    id: "home",
    route: "/",
    name: "Home",
    disabled: false,
  },
  speakers2024: {
    id: "2024speakers",
    route: "speakers",
    name: "2024 speakers",
    disabled: false,
  },
  exhibitors: {
    id: "exhibitors",
    route: "exhibit",
    subRoute: ['exhibit', '2024 Exhibits'],
    name: "Exhibitors",
    icon: ExpandMoreIcon,
    disabled: false,
  },
  sponsor: {
    id: "sponsor",
    route: "sponsor",
    name: "Sponsor",
    disabled: false,
  },
  program2024: {
    id: "2024-program",
    route: "program",
    name: "2024 Program",
    disabled: false,
  },
  media: {
    id: "media",
    route: "media",
    name: "Media",
    disabled: false,
  },
  travel: {
    id: "travel",
    route: "travel",
    subRoute: ['travel'],
    name: "Travel",
    disabled: false,
  },
};

export const NAV_BUTTONS: Record<string, NavBarItem> = {
  getTicket: {
    id: "getTicket",
    route: "ticket",
    name: "Get Ticket",
    disabled: false,
  },
  becomeASponsor: {
    id: "becomeASponsor",
    route: "sponsor",
    name: "Become A Sponsor",
    disabled: false,
  },
};
