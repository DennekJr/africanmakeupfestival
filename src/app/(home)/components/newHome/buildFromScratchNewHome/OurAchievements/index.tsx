"use client";
import { Box } from "@mui/material";
import {
  AgoraBox,
  AgoraTransitionBox,
} from "@/app/(home)/components/newHome/utils";
import Image from "next/image";
import { ArrowDownwardOutlined } from "@mui/icons-material";
// import { AchievementValues } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurAchievements/AchievementValues";

export const OurAchievements = () => {
  return (
    <section className={"z-[2] relative box-border"}>
      <Box className={"mx-auto min-h-[30vw] relative md:flex-nowrap flex-wrap flex max-w-[1320px]"}>
        <Box className={"flex relative md:block w-full md:w-[50%]"}>
          <Box
            className={
              "static !top-auto md:sticky md:top-0 px-[40px] md:px-[30px] flex w-full flex-wrap content-start"
            }
            sx={{ transition: "top 0.3s ease" }}
          >
            <AgoraBox className={"w-full text-center"}>
              <AgoraTransitionBox>
                <Image
                  src={"/images/achievement.webp"}
                  loading={"lazy"}
                  decoding={"async"}
                  height={723}
                  width={630}
                  alt={"our achievement hero"}
                  className={
                    "align-middle inline-block h-auto max-w-full border-none shadow-none rounded-none"
                  }
                />
              </AgoraTransitionBox>
            </AgoraBox>
          </Box>
        </Box>
        <Box className={"w-full md:w-[50%] flex relative"}>
          <Box
            className={
              "mt-[25px] md:mt-0 md:ml-[8%] lg:ml-[12.6%] px-[15px] lg:px-[30px] flex-wrap content-start relative flex"
            }
          >
            <Box className={"relative mb-0 w-full"}>
              <AgoraTransitionBox>
                <Box className={"relative"}>
                  <span
                    className={
                      "text-primary mb-[7.8px] md:mb-[0.75em] lg:mb-[1em] text-[14px] leading-[18px] uppercase font-semibold"
                    }
                  >
                    The Mission & Vision
                  </span>
                  <h1
                    className={"text-[27px] md:text-[44px] lg:text-[3.353em] text-primary font-extrabold"}
                  >
                    Bringing Skin care learning to life
                  </h1>
                  <Box className={"mt-[0.65em] md:mt-[1em] lg:mt-[1.7em] text-[1rem] lg:text-[1.3rem] text-lightSecondary mb-0 text-[1rem]"}>
                    <p>
                      To change the narrative in the
skincare industry in Africa by
promoting skincare awareness,
healthy practices, inclusivity in
beauty standards and
collaboration in the skincare
industry.
                    </p>
                  </Box>
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"h-[25px] md:-h-[30px] lg:h-[2.9vw] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
            <Box className={"max-w-full w-auto"}>
              <AgoraTransitionBox className={"mb-[-5px] ml-[-5px]"}>
                <Box className={"text-left block mx-auto my-0"}>
                  <ArrowDownwardOutlined
                    fill={"#C43C2A"}
                    sx={{ transition: "all .3s" }}
                    className={"inline-block text-center text-primary"}
                  />
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"mt-[0.65em] md:mt-[1em] lg:mt-[1.7em] text-[1rem] lg:text-[1.3rem] text-lightSecondary mb-0 text-[1rem]"}>
                    <p className={"mt-[1em]"}>
                      To become the premier
platform celebrating and
advancing Africa’s role in
the global skincare industry,
promoting innovation,
diversity, and excellence.
                    </p>
                  </Box>
            <Box className={"h-[30px] md:-h-[50px] lg:h-[5.2vw] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
{/*             <AchievementValues
              name1={"Locations"}
              name2={"Programs"}
              value1={10}
              value2={100}
            /> */}
            <Box className={"h-[45px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
{/*             <AchievementValues
              name1={"Brands"}
              name2={"Menus"}
              value1={15}
              value2={30}
            /> */}
          </Box>
        </Box>
      </Box>
    </section>
  );
};
