"use client"
import { Box } from "@mui/material";
import { AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";
import Image from "next/image";

export const EmptySpaceWithImageAboveAchievementSection = () => {
  return (
    <section className={"block box-border"}>
      <Box className={"m-auto flex relative"}>
        <Box className={"w-full"}>
          <Box className={"py-0 flex w-full flex-wrap relative"}>
            <Box
              className={
                "w-[10vw] max-w-10vw top-[4vw] right-[10px] md:right-[70px] absolute mb-0 z-[1] text-center translate-x-0 translate-y-0 rotate-0 scale-100"
              }
            >
              <AgoraTransitionBox className={"text-center animate-bounce delay-75"}>
                <Image
                  src={"/images/newHomeBuild/imageAboveAchievementSection.svg"}
                  alt={"imageAboveAchievementSection"}
                  height={215}
                  width={203}
                />
              </AgoraTransitionBox>
            </Box>
            <Box className={"h-[50px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
            <Box className={"h-[10px] lg:h-[20px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
