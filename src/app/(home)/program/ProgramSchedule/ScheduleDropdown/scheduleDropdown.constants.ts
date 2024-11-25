import { ScheduleDropdownTypes } from "./scheduleDropdown.types";

export const SCHEDULEDROPDOWNMENU: Record<string, ScheduleDropdownTypes> = {
  one: {
    id: "networking",
    time: "08:00 am",
    title: "Keynote Address",
    content: {
      summary:
        "The Future of Skincare in Africa” by a renowned industry expert."
    }
  },
  two: {
    id: "panelDiscussions",
    time: "10:00 am",
    title: "Panel Discussions",
    content: {
      summary:
        "Topics include “The Science of African Skin, “Trends in Sustainable Beauty.” “Building beauty businesses in Africa.”"
    }
  },
  three: {
    id: "GuestSpeakers",
    time: "11:00 am",
    title: "Guest Speakers",
    content: {
      summary:
        "Talks & insights from renowned dermatologists, aestheticians, and beauty influencers on skincare trends, sustainable beauty practices, and the science behind healthy skin.",
    },
  },
  four: {
    id: "Exhibition",
    time: "11:30 am",
    title: "Exhibition",
    content: {
      summary:
        "Booths for skincare brands, authorised distributors or international brands seeking presence in Africa"
    },
  },
  five: {
    id: "liveDemonstrations",
    time: "12:00 am",
    title: "Live Demonstrations",
    content: {
      summary:
        "Skincare routine demos, product sampling, mini skincare consultations and live skincare sessions",
    },
  },
  six: {
    id: "networkingSession",
    time: "01:30 pm",
    title: "Networking Session",
    content: {
      summary:
        "Opportunities for brands, authorised distributors, and investors to connect"
    },
  },
  seven: {
    id: "Entertainment&Refreshments",
    time: "02:00 pm",
    title: "Entertainment & Refreshments",
    content: {
      summary: "Enjoy music, games, food and drinks."
    },
  },
};
