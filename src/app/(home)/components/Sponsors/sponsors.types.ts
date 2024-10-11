export type SponsorType = {
  id: string;
  name: string;
  group: sponsorGroup[];
  disabled: boolean;
};

type sponsorGroup = {
  name: string;
  src: string;
  href: string;
};
