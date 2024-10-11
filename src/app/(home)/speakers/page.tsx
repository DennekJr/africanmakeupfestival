import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "@/app/(home)/speakers/Hero";
import { LearnFromLeaders } from "@/app/(home)/speakers/LearnFromLeaders";
import { SpeakerFullGrid } from "@/app/(home)/speakers/SpeakerFullGrid";

const Speakers: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box
      className={
        "bg-[#000000] flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <LearnFromLeaders />
      <SpeakerFullGrid />
    </Box>
  );
};

export default Speakers;
