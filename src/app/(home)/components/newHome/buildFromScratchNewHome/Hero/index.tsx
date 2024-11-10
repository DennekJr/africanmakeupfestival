import { Box, Button } from "@mui/material";
import { ThreeDashSVG } from "@/app/(home)/components/newHome/buildFromScratchNewHome/utils";
import Image from "next/image";
import { ArrowRightAlt } from "@mui/icons-material";
import React from "react";

export const Hero = () => {
  return <Box
    className={"relative w-full min-h-screen text-black flex justify-center"}
  >
    <Box
      className={
        "w-full absolute visible flex items-center justify-between mx-auto p-6 pl-0 lg:pl-8 2xl:pl-20 opacity-100 z-20"
      }
    >
      <Box className={"relative lg:h-[920px] contents"}>
        <Box className={"relative"}>
          <Box className={"rs-parallax-wrap-3 !top-[60px] !right-[-40px]"}>
            <Box className={"rs-layer"}>
              <ThreeDashSVG />
            </Box>
          </Box>
          <Box className={"rs-parallax-wrap-4"}>
            <Box className="rs-layer lg:!text-[45px] xl:!text-[90px]">
              <Box className="rs-splitted-lines xl:py-4 !font-semibold">
                <Box className={"relative pl-3 inline-block"}>
                  <Box className={"heroTexts"}>Discover</Box>
                </Box>
              </Box>
              <Box className={"rs-splitted-lines py-4 !font-semibold"}>
                <Box className={"relative pl-3 inline-block"}>
                  <Box className={"heroTexts"}>
                    Culinary Secrets
                  </Box>
                </Box>
              </Box>
              <Box className={"rs-splitted-lines xl:py-4 !font-semibold"}>
                <Box className={"relative pl-3 inline-block"}>
                  <Box className={"heroTexts"}>
                    at out festival.
                  </Box>

                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          className={"flex absolute bottom-6 justify-between items-center"}
        >
          <Image
            src={"/images/homeHeroImahe3.webp"}
            width={180}
            height={160}
            alt={"HeroImage"}
          />
          <Box className={"pl-8"}>
            <Box
              className={
                "pb-4 !text-[17px] flex flex-col w-full break-words whitespace-nowrap"
              }
            >
                <span>
                  Lorem ipsum lorem ipsum lorem ipsum <br />
                  lorem ipsum Lorem ipsum lorem ipsum
                </span>
              <span>Lorem ipsum lorem ipsum </span>
            </Box>
            <Button
              className={"!p-0 !m-0 !text-[#FD4C4C] !text-[17px]"}
              endIcon={<ArrowRightAlt className={"!text-[#FD4C4C]"} />}
            >
              BUY TICKETS
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={'max-h-[875px] max-w-[50%]'}>
        <Image
          src={"/images/homeHeroImahe3.webp"}
          width={700}
          height={875}
          className={"h-full w-auto object-cover min-w-96:!mr-40"}
          alt={"HeroImage"}
        />
      </Box>
    </Box>
  </Box>
}