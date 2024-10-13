import { EmojiGridType } from "./emojigrid.types";

export const EMOJIGRID_EMOJIS: Record<string, EmojiGridType> = {
  attendees: {
    id: "attendees",
    regularText: "Attendees (with 1 in 3 in C-suite roles)",
    boldText: "3000+",
    emojis: [
      {
        id: "attendees1",
        alt: "Attendee 1",
        src: "/images/emoji-grid/attendee1.webp",
      },
      {
        id: "attendees2",
        alt: "Attendee 2",
        src: "/images/emoji-grid/attendee2.webp",
      },
      {
        id: "attendees3",
        alt: "Attendee 3",
        src: "/images/emoji-grid/attendee3.webp",
      },
      {
        id: "attendees4",
        alt: "Attendee 4",
        src: "/images/emoji-grid/attendee4.webp",
      },
      {
        id: "attendees5",
        alt: "Attendee 5",
        src: "/images/emoji-grid/attendee5.webp",
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
        src: "/images/flags/nigerianFlag.webp",
      },
      { id: "countries2", alt: "Flag 2", src: "/images/flags/flag2.webp" },
      { id: "countries3", alt: "flag 3", src: "/images/flags/flag3.webp" },
      {
        id: "countries4",
        alt: "Ghana Flag",
        src: "/images/flags/ghanaflag4.png",
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
      { id: "bbc", alt: "bbc", src: "/images/emoji-grid/bbc.webp" },
      { id: "Forbes", alt: "Forbes", src: "/images/emoji-grid/forbes.webp" },
      { id: "TC", alt: "TC", src: "/images/emoji-grid/tc.webp" },
      { id: "bet", alt: "BET✰", src: "/images/emoji-grid/bet.webp" },
      {
        id: "financial_times",
        alt: "Financial Times",
        src: "/images/emoji-grid/financialtimes.webp",
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
    regularText: `Industry-Leading Speakers`,
    boldText: "30+",
    emojis: [
      {
        id: "speaker-1",
        alt: "Omoruyi Edoigiawerie",
        src: "/images/emoji-grid/speaker1.webp",
      },
      {
        id: "speaker-2",
        alt: "Ike Eze",
        src: "/images/emoji-grid/speaker2.webp",
      },
      {
        id: "speaker-3",
        alt: "Eunice Ajim",
        src: "/images/emoji-grid/speaker3.webp",
      },
      {
        id: "speaker-4",
        alt: "Nnaemeka Clinton",
        src: "/images/emoji-grid/speaker4.webp",
      },
      {
        id: "speaker-5",
        alt: "Arinze Chilo-Offiah",
        src: "/images/emoji-grid/speaker5.webp",
      },
      {
        id: "speaker-6",
        alt: "Victor Sada",
        src: "/images/emoji-grid/speaker6.webp",
      },
    ],
    disabled: false,
  },
};
