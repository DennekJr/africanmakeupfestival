import Marquee from "react-fast-marquee";
import { MarqueeStarIcon } from "../../utils";
import * as React from "react";
import Box from "@mui/material/Box";
const Marquees: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box className={'h-44 pt-32 text-black'}>
      Hello from Marquee
      <Marquee
        className={"w-full flex py-8 text-white bg-[#09090b]"}
        play
        direction={"left"}
      >
      <span className="px-12">
        Balmoral Convention Center, Federal Palace, V.I, Lagos, Nigeria.
      </span>
        <MarqueeStarIcon />
        <span className="px-12">Sat, 16th November, 2024</span>
        <MarqueeStarIcon />
        <span className="px-12">
        Balmoral Convention Center, Federal Palace, V.I, Lagos, Nigeria.
      </span>
        <MarqueeStarIcon />
        <span className="px-12">Sat, 16th November, 2024</span>
        <MarqueeStarIcon />
      </Marquee>
    </Box>
  );
};

export default Marquees;