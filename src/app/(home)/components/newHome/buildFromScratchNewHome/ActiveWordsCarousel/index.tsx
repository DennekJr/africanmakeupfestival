"use client";
import { Box } from "@mui/material";
import Marquee from "react-fast-marquee";
import {
  FestivalWordLoop,
  SkinCareWordsLoop
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/ActiveWordsCarousel/utils";

export const ActiveWordsCarousel = () => {
  return (
    <Box
      className={
        "flex w-[110vw] ml-[-7vw] flex-col whitespace-nowrap"
      }
    >
      <Marquee
        play
        direction={"right"}
        loop={0}
        pauseOnHover={true}
        speed={250}
        className={
          "h-[10vw] md:h-[12vw] opacity-100 w-full overflow-hidden z-0 absolute justify-start items-start flex-row !rotate-[-11deg]"
        }
      >
        <SkinCareWordsLoop wordCount={5} />
      </Marquee>
      <Marquee
        play
        direction={"right"}
        loop={0}
        speed={400}
        className={
          "h-[10vw] md:h-[12vw] opacity-100 w-full z-0 absolute justify-start items-start flex-row !rotate-[-11deg]"
        }
      >
        <FestivalWordLoop wordCount={6} />
      </Marquee>
    </Box>
  );
};
