import { EmojiGridType } from "@/app/(home)/components/EmojiGrid/emojigrid.types";

export const EMOJIGRID_EMOJIS: Record<string, EmojiGridType> = {
  attendees: {
    id: "attendees",
    regularText: "Attendees (with 1 in 3 in C-suite roles)",
    boldText: "3000+",
    emojis: [
      { id: "attendees1", alt: "Attendee 1", src: "" },
      { id: "attendees2", alt: "Attendee 2", src: "" },
      { id: "attendees3", alt: "Attendee 3", src: "" },
      { id: "attendees4", alt: "Attendee 4", src: "" },
    ],
    disabled: false,
  },
  countries: {
    id: "countries",
    regularText: "Countries",
    boldText: "15+",
    emojis: [
      { id: "countries1", alt: "Nigerian flag", src: "" },
      { id: "countries2", alt: "Flag 2", src: "" },
      { id: "countries3", alt: "flag 3", src: "" },
      { id: "countries4", alt: "Ghana Flag", src: "" },
      { id: "countries5", alt: "Usa Flag", src: "" },
      { id: "countries6", alt: "UK Flag", src: "" },
    ],
    disabled: false,
  },
  analysts: {
    id: "media_venture_analysts",
    regularText: `Media &amp; Venture Analysts`,
    boldText: "50+",
    emojis: [
      { id: "bbc", alt: "bbc", src: "" },
      { id: "Forbes", alt: "Forbes", src: "" },
      { id: "TC", alt: "TC", src: "" },
      { id: "bet", alt: "BET✰", src: "" },
      { id: "financial_times", alt: "Financial Times", src: "" },
      { id: "countries6", alt: "UK Flag", src: "" },
    ],
    disabled: false,
  },
  meetings: {
    id: "meetings",
    regularText: `Meetings facilitated`,
    boldText: "100+",
    emojis: [
      { id: "fire1", alt: "Fire emoji 1", src: "" },
      { id: "fire2", alt: "Fire emoji 2", src: "" },
    ],
    disabled: false,
  },
  industry_leading_speakers: {
    id: "Industry_Leading_Speakers",
    regularText: `Industry-Leading Speakers`,
    boldText: "30+",
    emojis: [
      { id: "speaker-1", alt: "Omoruyi Edoigiawerie", src: "" },
      { id: "speaker-2", alt: "Ike Eze", src: "" },
      { id: "speaker-3", alt: "Eunice Ajim", src: "" },
      { id: "speaker-4", alt: "Nnaemeka Clinton", src: "" },
      { id: "speaker-5", alt: "Arinze Chilo-Offiah", src: "" },
      { id: "speaker-6", alt: "Victor Sada", src: "" },
    ],
    disabled: false,
  },
};
