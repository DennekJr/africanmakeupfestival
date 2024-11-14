"use client";
import Marquee from "react-fast-marquee";
import { MarqueeStarIcon } from "../../../utils";
export const MarqueeSlide = () => {
  return (
    <Marquee
      className={"marquee-container w-full flex py-8 text-white bg-lightGrey text-primary"}
      play
      direction={"left"}
      loop={0}
    >
      <span className="px-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <MarqueeStarIcon />
      <span className="px-12">Sat, 20th December, 2024</span>
      <MarqueeStarIcon />
      <span className="px-12">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <MarqueeStarIcon />
      <span className="px-12">Sat, 20th December, 2024</span>
      <MarqueeStarIcon />
    </Marquee>
  );
};
