"use client";
import Marquee from "react-fast-marquee";
import { MarqueeStarIcon } from "@/app/utils";
export const MarqueeSlide = () => {
  return (
    <Marquee
      className={"marquee-container w-full flex py-8 text-white bg-[#09090b]"}
      play
      direction={"left"}
      loop={0}
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
  );
};
