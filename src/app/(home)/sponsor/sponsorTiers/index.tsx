"use client";
import Box from "@mui/material/Box";
import { BlackArrowDownImage } from "./utils";
import { useMemo } from "react";
import { WhiteBgArrowButton } from "@/app/utils";
import { SPONSORTIERSCONSTANTMENU } from "@/app/(home)/sponsor/sponsorTiers/sponsorTiers.constants";

export const SponsorshipTier = () => {
  const sponsorTiers = useMemo(() => Object.values(SPONSORTIERSCONSTANTMENU), []);
  return (
    <Box
      className={
        "w-full py-12 px-6 xl:py-24 2xl:py-32 bg-midGrey text-lightSecondary relative bg-[url(https://www.africastartupfestival.com/grid-section.svg)] bg-repeat-y bg-top"
      }
    >
      {/* <Box className="absolute inset-0 bg-primary opacity-30 mix-blend-overlay z-12"></Box> */}
      <BlackArrowDownImage />
      <Box className={"max-w-[1320px] mx-auto grid gap-14"}>
        <Box>
          <h3
            className="text-[23px] text-primary leading-[27.6px] tracking-[-1px] lg:text-5xl lg:leading-[52.8px] font-medium">
            Sponsorship
            Tiers & Benefits
          </h3>
        </Box>
        <Box
          className={
            "rounded-3xl lg:py-8 grid sm:grid-cols-1 gap-8 relative border border-lightSecondary"
          }
        >
          {sponsorTiers.map((sponsorTier, index) => {
            const lastIndex = index === sponsorTiers.length - 1;
            return (
              <Box
                key={index}
                className={
                  "grid sm:grid-cols-2 md:px-16 px-4 grid-cols-1 gap-6 lg:gap-8 md:py-8 py-6 border-[#504E56]" +
                  `${!lastIndex ? " border-b" : ""}`
                }
              >
                <Box className="col-span-1 space-y-1.5">
                  <p className="capitalize text-[23px] leading-[27.6px] md:text-5xl lg:leading-normal font-medium">
                    {sponsorTier.title} <br /> <span className={"font-light text-4xl"}>{sponsorTier.price}</span>
                  </p>
                  <p>{sponsorTier.tier}</p>
                </Box>
                <Box className={"grid gap-7"}>
                  <ol className="col-span-1 list-disc grid gap-4 pl-4 lg:pl-0">
                    {sponsorTier.list.map((listItem, index) => (
                      <li className="text-xl" key={index}>
                        <p>{listItem}</p>
                      </li>
                    ))}
                  </ol>
                  <a href={"mailto:contact@africaskincarefestival.com"} className={"hover:cursor-pointer"}>
                    <WhiteBgArrowButton
                      name={"Contact Us"}
                      classNames={
                        "gap-3 h-14 px-6 py-4 rounded-full w-full md:w-auto !text-black"
                      }
                    />
                  </a>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
