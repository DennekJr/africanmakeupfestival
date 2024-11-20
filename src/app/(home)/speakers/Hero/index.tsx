import Box from "@mui/material/Box";
import { HeroWhiteScribble, SpeakerDash } from "./utils";
import Image from "next/image";
import React from "react";
import { FortyFiveDegreeArrow } from "@/app/(home)/media/Hero/utils";

export const Hero = () => {
  return (
    <section
      className={
        "relative grid lg:grid-cols-2 w-full lg:min-h-screen !bg-black"
      }
    >
      <Box
        className={
          "col-span-1 flex flex-col justify-center px-6 py-12 lg:p-14 lg:pl-[15px] gap-12 max-w-[660px] mr-auto md:ml-auto"
        }
      >
        <Box className="grid gap-6">
          <div>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words text-primary">
                The biggest names in the African skincare and investment
                landscape join us as{" "}
              </span>
              <span className="relative max-w-full break-words text-textColor">
                speakers.{" "}
                <SpeakerDash />
              </span>
            </pre>
          </div>
        </Box>
        <Box className="flex gap-4">
          <a
            className="inline-flex primary-bg-animation-hover primary-bg-animation-leave items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-primary text-textColor hover:!bg-primary/70 h-14 px-6 py-4 rounded-none w-full md:w-auto"
            href="/ticket"
          >
            <span>GET A TICKET</span>
            <FortyFiveDegreeArrow />
          </a>
        </Box>
      </Box>
      <Box className={"col-span-1 relative text-primary"}>
        <HeroWhiteScribble />
        <Image
          src={"/images/speakerPage.webp"}
          alt={"2025 speaker"}
          className={
            "object-cover object-center h-full w-full min-h-[545px] max-h-[545px] lg:max-h-full"
          }
          width="2208"
          height="2028"
          priority
          decoding="async"
          style={{ color: "transparent" }}
        />
      </Box>
    </section>
  );
};
