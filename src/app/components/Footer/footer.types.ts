export type FooterItem = {
  id: string;
  route: string;
  name: string;
  subLinks: FooterSubLink[];
  disabled: boolean;
};

type FooterSubLink = {
  id: string;
  route: string;
  name: string;
  disabled?: boolean;
};
