// import Box from "@mui/material/Box";
import * as React from "react";
// import { Hero } from "./Hero";
// import { LearnFromLeaders } from "./LearnFromLeaders";
// import { SpeakerFullGrid } from "./SpeakerFullGrid";
// import { MarqueeSlide } from "../components/Marquee";
import { notFound } from "next/navigation";

const Speakers: () => Promise<React.JSX.Element> = async () => {
  return notFound();
  // return (
  //   <Box
  //     className={
  //       "bg-midGrey flex flex-col items-center justify-between"
  //     }
  //   >
  //     <Hero />
  //     <MarqueeSlide />
  //     <LearnFromLeaders />
  //     <SpeakerFullGrid />
  //   </Box>
  // );
};

export default Speakers;
