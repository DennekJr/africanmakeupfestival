import { ExhibitionBoothTypes } from "./exhibitionBooth.types";

export const EXHIBITIONBOOTHCONSTANTMENU: Record<
  string,
  ExhibitionBoothTypes
> = {
  one: {
    id: "Standard",
    title: "Standard",
    price: 'NGN 600,000',
    location: "Standard exhibition location (2m x 3m booth)",
    list: [
      "Standard exhibition location (2m x 3m booth)",
      "Complimentary Branding",
      "Table & Chair"
    ],
  },
  two: {
    id: "premium",
    title: "Premium",
    price: "NGN 1,200,000",
    location: "Premium exhibition location (2m x 6m booth)",
    list: [
      "Premium exhibition location (2m x 6m booth)",
      "Complimentary Branding",
      "Table & Chair"
    ],
  },
};
