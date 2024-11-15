import Box from "@mui/material/Box";
import { HeroWhiteScribble, SpeakerDash } from "./utils";
import Image from "next/image";
import React from "react";

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
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-primary text-textColor hover:!bg-primary/70 h-14 px-6 py-4 rounded-none w-full md:w-auto"
            href="/ticket"
          >
            <span>GET A TICKET</span>
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M13.2078 4.63574C12.6555 4.63574 12.2078 5.08346 12.2078 5.63574C12.2078 6.18803 12.6555 6.63574 13.2078 6.63574H16.4504L5.42961 17.6566C5.03909 18.0471 5.03909 18.6802 5.42961 19.0708C5.82014 19.4613 6.4533 19.4613 6.84383 19.0708L17.8646 8.04996V11.2926C17.8646 11.8449 18.3124 12.2926 18.8646 12.2926C19.4169 12.2926 19.8646 11.8449 19.8646 11.2926V5.63574C19.8646 5.08346 19.4169 4.63574 18.8646 4.63574H13.2078Z"
                fill="currentColor"
              ></path>
            </svg>
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
