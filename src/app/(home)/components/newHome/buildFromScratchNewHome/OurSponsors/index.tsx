"use client";
import { Box } from "@mui/material";
import {
  AgoraBox,
  AgoraTransitionBox,
  AgoraTransitionWithThreeDashSVG,
} from "@/app/(home)/components/newHome/utils";
import { useMemo } from "react";
import { SPONSORCONSTANTS } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurSponsors/Sponsor/sponsor.constants";
import { Sponsor } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurSponsors/Sponsor";

export const OurSponsors = () => {
  const sponsors = useMemo(() => Object.values(SPONSORCONSTANTS), []);
  return (
    <section className={"relative block"}>
      <Box className={"max-w-[1320px] mx-auto"}>
        <Box className={"w-full relative flex"}>
          <Box className={"px-[15px] md:px-[30px] w-full"}>
            <section className={"w-full relative"}>
              <Box className={"flex mx-auto relative"}>
                <Box className={"w-[90%] lg:w-[28%]"}>
                  <AgoraTransitionWithThreeDashSVG>
                    <AgoraBox>
                      <AgoraTransitionBox>
                        <Box className={"relative text-primary"}>
                          <Box
                            className={
                              "text-[14px] w-full leading-[18px] pb-[1rem] uppercase"
                            }
                            style={{ letterSpacing: "1.8px" }}
                          >
                            Our Clients
                          </Box>
                          <h1
                            className={
                              "ml-[-1px] leading-[1em] text-[27px] md:text-[32px] lg:text-[3.353em] font-semibold"
                            }
                          >
                            Sponsors of our festival
                          </h1>
                        </Box>
                      </AgoraTransitionBox>
                    </AgoraBox>
                  </AgoraTransitionWithThreeDashSVG>
                </Box>
                <Box className={"w-[10%] lg:w-[72%]"}></Box>
              </Box>
            </section>
            <Box className={"h-[52px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
            <Box className={"w-full mb-0"}>
              <AgoraTransitionBox>
                <Box className={"text-left"}>
                  <Box className={"flex flex-wrap md:mr-[-30px] box-border"}>
                    {sponsors.map((sponsor, index) => {
                      return <Sponsor key={index} sponsor={sponsor} />;
                    })}
                  </Box>
                </Box>
              </AgoraTransitionBox>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={"h-[120px] lg:h-[120px] w-full"}>
        <AgoraTransitionBox>
          <Box className={"h-[120px]"} />
        </AgoraTransitionBox>
      </Box>
    </section>
  );
};
