import { NextPage } from "next";
import Box from "@mui/material/Box";
import * as React from "react";
import NavBar from "@/app/components/NavBar";
import { Hero } from "@/app/(home)/components/Hero";
import { MarqueeSlide } from "@/app/(home)/components/Marquee";
import { InvestorsMedia } from "@/app/(home)/components/Investors";
import { EmojiGrid } from "@/app/(home)/components/EmojiGrid";
import { BusinessInsiderPoster } from "@/app/(home)/components/BusinessInsiderPoster";
import { Speakers } from "@/app/(home)/components/Speakers";

const Home: NextPage = () => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <NavBar />
      <Hero />
      <MarqueeSlide />
      <InvestorsMedia />
      <EmojiGrid />
      <BusinessInsiderPoster />
      <Speakers />
    </Box>
  );
};

export default Home;
