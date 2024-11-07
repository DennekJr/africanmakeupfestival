"use client";
import Box from "@mui/material/Box";
import {
  PartnershipLeftIcon,
  PartnershipRightIcon,
  PartnerSixStrokes,
  SponsorUnderStrokes,
  WhiteBgArrowButton,
} from "../../../utils";
import { PartnershipText } from "./utils";

export const Partnership = () => {
  return (
    <Box className={"w-full py-16 lg:py-24 px-6"}>
      <Box
        className={
          "max-w-[1320px] mx-auto text-white rounded-3xl bg-[#0A090B] relative"
        }
      >
        <Box
          className={
            "bg-[url(https://www.africastartupfestival.com/grid-section.svg)] bg-center bg-cover min-h-[615px] py-[86px]"
          }
        >
          <PartnershipLeftIcon />
          <div className="grid gap-12 lg:gap-20 max-w-4xl mx-auto py-12 px-4 lg:px-24 lg:py-24">
            <div>
              <pre
                id="undefined-0"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center font-medium heading text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px]"
              >
                <span className="relative max-w-full break-words">
                  Become A&nbsp;
                </span>
                <span className="relative max-w-full break-words">
                  Partner
                  <PartnerSixStrokes />
                </span>
              </pre>
              <pre
                id="undefined-1"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center font-medium heading text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px]"
              >
                <span className="relative max-w-full break-words">or </span>
                <span className="relative max-w-full break-words">
                  Sponsor
                  <SponsorUnderStrokes />
                </span>
              </pre>
            </div>
            <div className="grid gap-8">
              <div>
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center heading text-xl font-normal"
                >
                  <PartnershipText />
                </pre>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-14 px-6 py-4 rounded-full w-full md:w-auto"
                  href=""
                >
                  <WhiteBgArrowButton
                    name={"APPLY NOW"}
                    classNames={"px-6 py-4 "}
                  />
                </a>
              </div>
            </div>
          </div>
          <PartnershipRightIcon />
        </Box>
      </Box>
    </Box>
  );
};
