import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "/Hero";
import { LearnFromLeaders } from "/LearnFromLeaders";
import { SpeakerFullGrid } from "/SpeakerFullGrid";

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
