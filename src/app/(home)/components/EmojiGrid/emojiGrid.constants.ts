import { EmojiGridType } from "./emojigrid.types";

export const EMOJIGRID_EMOJIS: Record<string, EmojiGridType> = {
  attendees: {
    id: "attendees",
    regularText: "Attendees",
    boldText: "3000+",
    emojis: [
      {
        id: "attendees1",
        alt: "Attendee 1",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "attendees2",
        alt: "Attendee 2",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "attendees3",
        alt: "Attendee 3",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "attendees4",
        alt: "Attendee 4",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "attendees5",
        alt: "Attendee 5",
        src: "/images/emoji-grid/attendees.webp",
      },
    ],
    disabled: false,
  },
  countries: {
    id: "countries",
    regularText: "Countries",
    boldText: "15+",
    emojis: [
      {
        id: "countries1",
        alt: "Nigerian flag",
        src: "/images/flags/nigerianflag.webp",
      },
      { id: "countries2", alt: "Flag 2", src: "/images/flags/flag2.webp" },
      { id: "countries3", alt: "flag 3", src: "/images/flags/flag3.webp" },
      {
        id: "countries4",
        alt: "Ghana Flag",
        src: "/images/flags/ghanaflag4.webp",
      },
      { id: "countries5", alt: "Usa Flag", src: "/images/flags/usaflag5.webp" },
      { id: "countries6", alt: "UK Flag", src: "/images/flags/ukflag6.webp" },
    ],
    disabled: false,
  },
  analysts: {
    id: "media_venture_analysts",
    regularText: `Media & Venture Analysts`,
    boldText: "50+",
    emojis: [
      { id: "bbc", alt: "bbc", src: "/images/emoji-grid/bbcRed.webp" },
      { id: "Forbes", alt: "Forbes", src: "/images/emoji-grid/forbesBlack.webp" },
      { id: "TC", alt: "TC", src: "/images/emoji-grid/tcWhite.webp" },
      { id: "bet", alt: "BET✰", src: "/images/emoji-grid/betWhite.webp" },
      {
        id: "financial_times",
        alt: "Financial Times",
        src: "/images/emoji-grid/ftBlack.webp",
      },
    ],
    disabled: false,
  },
  meetings: {
    id: "meetings",
    regularText: `Meetings facilitated`,
    boldText: "100+",
    emojis: [
      { id: "fire1", alt: "Fire emoji 1", src: "/images/emoji-grid/fire.webp" },
      { id: "fire2", alt: "Fire emoji 2", src: "/images/emoji-grid/fire.webp" },
    ],
    disabled: false,
  },
  industry_leading_speakers: {
    id: "Industry_Leading_Speakers",
    regularText: `Skincare Industry-Leading Speakers`,
    boldText: "30+",
    emojis: [
      {
        id: "speaker-1",
        alt: "Lorem Ipsum",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "speaker-2",
        alt: "Lorem Ipsum",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "speaker-3",
        alt: "Lorem Ipsum",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "speaker-4",
        alt: "Lorem Ipsum",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "speaker-5",
        alt: "Lorem Ipsum",
        src: "/images/emoji-grid/attendees.webp",
      },
      {
        id: "speaker-6",
        alt: "Lorem Ipsum",
        src: "/images/emoji-grid/attendees.webp",
      },
    ],
    disabled: false,
  },
};
