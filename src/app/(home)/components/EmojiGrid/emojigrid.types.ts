export type EmojiGridType = {
  id: string;
  route?: string;
  regularText: string;
  boldText: string;
  emojis: Emoji[];
  disabled: boolean;
};

type Emoji = {
  id: string;
  alt: string;
  src: string;
};
