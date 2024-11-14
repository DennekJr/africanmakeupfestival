import Box from "@mui/material/Box";
import * as React from "react";
import { Hero } from "./Hero";
import { MarqueeSlide } from "../components/Marquee";
import { PreviousEvents } from "./previousEvents";
import { Benefits } from "./Benefits";
import { ExhibitionBooth } from "./ExhibitionBooth";
import { Testimonials } from "./Testimonials";

const Exhibit: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box
      className={
        "flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <MarqueeSlide />
      <PreviousEvents />
      <Benefits />
      <ExhibitionBooth />
      {/* <Testimonials /> */}
    </Box>
  );
};

export default Exhibit;
