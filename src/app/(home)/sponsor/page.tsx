import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "@/app/(home)/sponsor/Hero";
import { MarqueeSlide } from "@/app/(home)/components/Marquee";
import { Partners } from "@/app/(home)/sponsor/Partners";

const Speakers: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box
      className={
        "bg-[#000000] flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <MarqueeSlide />
      <Partners />
    </Box>
  );
};

export default Speakers;
