import { ExhibitionBoothTypes } from "./exhibitionBooth.types";

export const EXHIBITIONBOOTHCONSTANTMENU: Record<
  string,
  ExhibitionBoothTypes
> = {
  one: {
    id: "ventures",
    title: "Ventures",
    price: 'NGN 600,000',
    location: 'Standard exhibition location (2*2 booth)',
    list: [
      "Standard exhibition location (2*2 booth)",
      "⁠Marketing benefits and acknowledgment as an official exhibitor",
      "Standard exhibition location (2*2 booth)",
    ],
  },
  two: {
    id: "oasis",
    title: "Oasis",
    price: 'NGN 850,000',
    location: 'Standard exhibition location (3*3 booth)',
    list: [
      "Standard exhibition location (2*2 booth)",
      "⁠Marketing benefits and acknowledgment as an official exhibitor",
      "Standard exhibition location (2*2 booth)",
    ],
  },
  three: {
    id: "nextgen",
    title: "NextGen",
    price: 'NGN 1,200,000',
    location: 'Standard exhibition location (2*2 booth)',
    list: [
      "Standard exhibition location (2*2 booth)",
      "⁠Marketing benefits and acknowledgment as an official exhibitor",
      "Standard exhibition location (2*2 booth)",
      "Standard exhibition location (2*2 booth)",
      "Standard exhibition location (2*2 booth)",
      "Standard exhibition location (2*2 booth)",
      "Standard exhibition location (2*2 booth)",
    ],
  },
};
