import {
  CalenderEventTypes
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents/calenderEventTypes";

export const CALENDEREVENTCONSTANTS: Record<string, CalenderEventTypes> = {
  one: {
    id: "dayOne",
    day: "21",
    month: "December",
    year: "2024",
    title: "African Skincare Festival",
    location: "Herel Play, Ikoyi, Lagos",
    startsAt: "10:00 am",
    endsAt: "6:00 pm",
    ticketCount: 100,
    ticketType: "purchase"
  },
  two: {
    id: "dayTwo",
    day: "22",
    month: "December",
    year: "2024",
    title: "African Skincare Festival",
    location: "Herel Play, Ikoyi, Lagos",
    startsAt: "10:00 am",
    endsAt: "6:00 pm",
    ticketCount: 100,
    ticketType: "purchase"
  },
  // three: {
  //   id: "delightsFestival",
  //   day: "26",
  //   month: "December",
  //   year: "2024",
  //   title: "African Skincare Festival 3",
  //   location: "52 Cameron road, Lagos",
  //   startsAt: "09:15am",
  //   endsAt: "13:30pm",
  //   ticketCount: 20,
  //   ticketType: "free",
  // },
};
