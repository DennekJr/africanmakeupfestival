import { NextPage } from "next";
import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "../../app/(home)/components/Hero";
import { MarqueeSlide } from "../../app/(home)/components/Marquee";
import { BuildFromScratchNewHome } from "@/app/(home)/components/newHome/buildFromScratchNewHome";

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className="!bg-lightGrey mt-[-65px]">
      <Hero />
      <MarqueeSlide />
      <BuildFromScratchNewHome />
    </Box>
  );
};

export default Home;
