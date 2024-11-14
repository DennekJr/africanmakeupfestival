import { Box } from "@mui/material";
import "../Hero/hero.styles.css";
import React from "react";
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
import {
  EmptySpaceBelowCarousel,
  EmptySpaceWithImageBelowAchievementSection
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/EmptySpaceWithImageBelowAchievementSection";
import { ActiveWordsCarousel } from "@/app/(home)/components/newHome/buildFromScratchNewHome/ActiveWordsCarousel";
import { OurSponsors } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurSponsors";
import { ContactUs } from "@/app/(home)/components/newHome/buildFromScratchNewHome/ContactUs";

export const BuildFromScratchNewHome = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '5rem' }}>
      <WhoAreWe />
      <Experiences />
      <CalenderEvents />
      <AboutUs />
      <VisitingSpeakers />
      <SkinCareAdventure />
      <EmptySpaceWithImageAboveAchievementSection />
      <OurAchievements />
      <EmptySpaceWithImageBelowAchievementSection />
      <ActiveWordsCarousel />
      <EmptySpaceBelowCarousel />
      <OurSponsors />
      <ContactUs />
    </Box>
  );
};
