import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "./Hero";
import { Stages } from "./Stages";
import { ProgramSchedule } from "./ProgramSchedule";
import { MarqueeSlide } from "../components/Marquee";

const Program: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box
      className={
        "flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <MarqueeSlide />
      <Box className={'bg-lightGrey w-full'}>
        <Stages />
        <ProgramSchedule />
      </Box>
    </Box>
  );
};

export default Program;
