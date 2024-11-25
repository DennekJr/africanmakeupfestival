import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "./Hero";
import { MarqueeSlide } from "../components/Marquee";
import { Partners } from "./Partners";
import { SponsorshipTier } from "@/app/(home)/sponsor/sponsorTiers";

const Sponsor: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box
      className={
        "bg-[#000000] flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <MarqueeSlide />
      <Partners />
      <SponsorshipTier />
    </Box>
  );
};

export default Sponsor;
