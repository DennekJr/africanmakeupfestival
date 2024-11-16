import { SvgIconComponent } from "@mui/icons-material";

export type SpeakerType = {
  id: string;
  image: string;
  name: string;
  position: string;
  socialMedia: { id: string; url: string; icon: SvgIconComponent, delay: number }[];
};
