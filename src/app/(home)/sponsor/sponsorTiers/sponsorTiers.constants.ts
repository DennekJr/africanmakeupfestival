import { SponsorTierTypes } from "@/app/(home)/sponsor/sponsorTiers/sponsorTiers.types";

export const SPONSORTIERSCONSTANTMENU: Record<
  string,
  SponsorTierTypes
> = {
  one: {
    id: "radiance",
    title: "Radiance Sponsor",
    price: "NGN 20 Million",
    tier: "Top Tier",
    list: [
      "HEADLINE SPONSOR Naming rights to the event.",
      "Company logo & link on ASF website.",
      "Exclusive Logo placement on marketing materials.",
      "Media coverage",
      "Onstage brand mentions during event.",
      "Featured brand promotions and Social media shoutouts.",
      "Panel speaking opportunity.",
      "Premium booth space.",
      "Brand products in PR boxes.",
      "Vip access to VIP lounge."
    ]
  },
  two: {
    id: "glow",
    title: "Glow Sponsor",
    price: "NGN 10 Million",
    tier: "Second Tier",
    list: [
      "Company Logo on ASF website.",
      "Prominent Logo placement on marketing materials.",
      "Onstage mentions during event.",
      "Preferred booth space.",
      "Targeted brand promotions and Social media shoutouts.",
      "Brand products in PR boxes.",
      "Access to Exclusive perks."
    ]
  },
  three: {
    id: "hydrate",
    title: "Hydrate Sponsor",
    price: "NGN 5 Million",
    tier: "Hydrate Tier",
    list: [
      "Logo placement on event materials, social media and website.",
      "Exhibition stand.",
      "General promotional mentions and social media shoutouts.",
      "Brand products in PR boxes.",
      "Access to Exclusive perks."
    ]
  }
};
