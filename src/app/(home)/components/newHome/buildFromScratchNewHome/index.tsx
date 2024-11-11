import { Box } from "@mui/material";
import "../Hero/hero.styles.css";
import React from "react";
import { Hero } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Hero";
import { WhoAreWe } from "@/app/(home)/components/newHome/buildFromScratchNewHome/WhoAreWe";
import { Experiences } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Experiences";
import '../buildFromScratchNewHome/newHome.styles.css';
import { CalenderEvents } from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents";
import { AboutUs } from "@/app/(home)/components/newHome/AboutUs";
import { VisitingSpeakers } from "@/app/(home)/components/newHome/buildFromScratchNewHome/VisitingSpeakers";

export const BuildFromScratchNewHome = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", padding: '5rem 0' }}>
      <Hero />
      <WhoAreWe />
      <Experiences />
      <CalenderEvents />
      <AboutUs />
      <VisitingSpeakers />
    </Box>
  );
};
