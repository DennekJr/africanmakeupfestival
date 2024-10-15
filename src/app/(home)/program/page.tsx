"use client"
import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "./Hero";
import { Stages } from "./Stages";
import { ProgramSchedule } from "./ProgramSchedule";

const Program = () => {
  return (
    <Box
      className={
        "bg-[#000000] flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <Box className={'bg-[#ffffff] w-full'}>
        <Stages />
        <ProgramSchedule />
      </Box>
    </Box>
  );
};

export default Program;
