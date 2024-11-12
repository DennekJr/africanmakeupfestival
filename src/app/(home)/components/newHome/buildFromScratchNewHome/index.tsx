import { Box } from "@mui/material";
import "../Hero/hero.styles.css";
import React from "react";
import { Hero } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Hero";
import { WhoAreWe } from "@/app/(home)/components/newHome/buildFromScratchNewHome/WhoAreWe";
import { Experiences } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Experiences";
import '../buildFromScratchNewHome/newHome.styles.css';
import { CalenderEvents } from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents";
import { AboutUs } from "app/(home)/components/newHome/buildFromScratchNewHome/AboutUs";
import { VisitingSpeakers } from "@/app/(home)/components/newHome/buildFromScratchNewHome/VisitingSpeakers";
import { SkinCareAdventure } from "@/app/(home)/components/newHome/buildFromScratchNewHome/SkinCareAdventure";
import {
  EmptySpaceWithImageAboveAchievementSection
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/EmptySpaceWithImageAboveAchievementSection";
import { OurAchievements } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurAchievements";

export const BuildFromScratchNewHome = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '5rem 0' }}>
      <Hero />
      <WhoAreWe />
      <Experiences />
      <CalenderEvents />
      <AboutUs />
      <VisitingSpeakers />
      <SkinCareAdventure />
      <EmptySpaceWithImageAboveAchievementSection />
      <OurAchievements />
    </Box>
  );
};
