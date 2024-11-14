"use client"
import { Box } from "@mui/material";
import { AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";
import Image from "next/image";

export const EmptySpaceWithImageBelowAchievementSection = () => {
  return <section className={"block box-border"}>
    <Box className={"m-auto flex relative"}>
      <Box className={"w-full"}>
        <Box className={"py-0 flex w-full flex-wrap relative"}>
          <Box className={"h-[15vw] w-full"}>
            <AgoraTransitionBox>
              <Box className={"h-[120px]"} />
            </AgoraTransitionBox>
          </Box>
          <Box
            className={
              "w-[10vw] max-w-10vw top-[3vw] left-[1vw] md:left-[9vw] absolute mb-0 z-[1] text-center translate-x-0 translate-y-0 rotate-0 scale-100"
            }
          >
            <AgoraTransitionBox className={"text-center animate-bounce"}>
              <Image
                src={"/images/newHomeBuild/whoWeAreTopLeftImage.svg"}
                alt={"imageAboveAchievementSection"}
                height={215}
                width={203}
              />
            </AgoraTransitionBox>
          </Box>
        </Box>
      </Box>
    </Box>
  </section>
}

export const EmptySpaceBelowCarousel = () => {
  return <section className={"block box-border"}>
    <Box className={"m-auto flex relative"}>
      <Box className={"w-full"}>
        <Box className={"py-0 flex w-full flex-wrap relative"}>
          <Box className={"h-[17vw] w-full"}>
            <AgoraTransitionBox>
              <Box className={"h-[120px]"} />
            </AgoraTransitionBox>
          </Box>
        </Box>
      </Box>
    </Box>
  </section>
}