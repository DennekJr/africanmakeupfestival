import { Box } from "@mui/material";
import "../Hero/hero.styles.css";
import React from "react";
import { Hero } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Hero";
import { WhoAreWe } from "@/app/(home)/components/newHome/buildFromScratchNewHome/WhoAreWe";
import { Experiences } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Experiences";
import '../buildFromScratchNewHome/newHome.styles.css';

export const BuildFromScratchNewHome = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <Hero />
      <WhoAreWe />
      <Experiences />
    </Box>
  );
};
