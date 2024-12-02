"use client";
import { Box } from "@mui/material";
import {
  AgoraBox,
  AgoraTransitionBox,
  HomeButton,
  SkinCareAdventuresImageWithTransition
} from "@/app/(home)/components/newHome/utils";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SkinCareAdventure = () => {
  const router = useRouter();
  return (
    <SkinCareAdventuresImageWithTransition>
      <Box className={"max-w-[1320px] flex mx-auto relative"}>
        <Box className={"w-full"}>
          <Box
            className={
              "px-[15px] md:px-[30px] max-w-full md:!max-w-[1100px] lg:!max-w-[1320px]"
            }
          >
            <Box className={"h-[50px] md:h-[85px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
            {/*content*/}
            {/*Top right image*/}
            <Box
              className={
                "transform translate-x-0 translate-y-0 rotate-0 scale-100 absolute right-[2vw] xl:right-[19vw] text-center max-w-[4vw] top-[2vw] w-[5vw] z-[1]"
              }
            >
              <AgoraTransitionBox className={""}>
                <Image
                  loading="lazy"
                  decoding="async"
                  width="60"
                  height="63"
                  src="/images/newHomeBuild/threeDashYellow.svg"
                  className="h-[63px] w-[60px] align-middle inline-block border-none"
                  alt=""
                />
              </AgoraTransitionBox>
            </Box>
            <AgoraBox
              zIndex={2}
              className={"flex flex-wrap md:flex-nowrap mx-auto relative"}
            >
              <Box className={"w-full md:w-[77%]"}>
                <Box className={"w-full items-center content-center"}>
                  <Box className={"z-[2] w-full"}>
                    <AgoraTransitionBox className={"mr-[-1%]"}>
                      <Box className={"relative box-border"}>
                        <h2
                          className={
                            "text-[27px] md:text-[47px] leading-[1.021em] ml-[-1px]"
                          }
                        >
                          Start your adventure at our festival now
                        </h2>
                      </Box>
                    </AgoraTransitionBox>
                  </Box>
                </Box>
              </Box>
              <Box
                className={"w-full md:w-[23%] z-[2] text-left md:text-right"}
              >
                <Box className={"content-center items-center md:ml-[15px]"}>
                  <AgoraTransitionBox className={"w-full"}>
                    <HomeButton
                      onClick={() => router.push("/ticket")}
                      className={
                        "mt-[20px] md:mt-[20px] md:mb-[10px] hover:cursor-pointer inline-block align-top bg-[#FE9E11]"
                      }
                    >
                      <span className={"inline-block align-middle"}>
                        Tickets
                      </span>
                    </HomeButton>
                  </AgoraTransitionBox>
                </Box>
              </Box>
            </AgoraBox>
            <Box
              className={
                "transform translate-x-[2px] translate-y-0 scale-[0.98] scale-y-[-1] scale-x-[-1] absolute md:left-[-5px] xl:left-[-5vw] text-center max-w-[5vw] w-[5vw] z-[1]"
              }
            >
              <AgoraTransitionBox className={""}>
                <Image
                  loading="lazy"
                  decoding="async"
                  width="60"
                  height="63"
                  src="/images/newHomeBuild/threeDashYellow.svg"
                  className="h-[63px] w-[60px] align-middle inline-block border-none max-w-full"
                  alt=""
                />
              </AgoraTransitionBox>
            </Box>
            {/*content*/}
            <Box className={"h-[50px] md:h-[85px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </SkinCareAdventuresImageWithTransition>
  );
};
