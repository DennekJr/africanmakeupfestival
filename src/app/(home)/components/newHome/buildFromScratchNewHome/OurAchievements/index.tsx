"use client";
import { Box } from "@mui/material";
import {
  AgoraBox,
  AgoraTransitionBox,
} from "@/app/(home)/components/newHome/utils";
import Image from "next/image";
import { ArrowDownwardOutlined } from "@mui/icons-material";
import { AchievementValues } from "@/app/(home)/components/newHome/buildFromScratchNewHome/OurAchievements/AchievementValues";

export const OurAchievements = () => {
  return (
    <section className={"z-[2] relative box-border"}>
      <Box className={"mx-auto min-h-[30vw] relative md:flex-nowrap flex-wrap flex max-w-[1320px]"}>
        <Box className={"flex md:block w-full md:w-[50%]"}>
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
                  // loading={"lazy"}
                  // decoding={'async'}
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
                      "text-[#FD4C19] mb-[7.8px] md:mb-[0.75em] lg:mb-[1em] text-[14px] leading-[18px] uppercase font-semibold"
                    }
                  >
                    Our Achievements
                  </span>
                  <h1
                    className={"text-[27px] md:text-[44px] lg:text-[3.353em] text-[#FD4C19] font-extrabold"}
                  >
                    Bringing Skin care learning to life
                  </h1>
                  <Box className={"mt-[0.65em] md:mt-[1em] lg:mt-[1.7em] text-lightSecondary mb-0 text-[1rem]"}>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam. Sed ut perspiciatis unde omnis.
                    </p>
                    <p className={"mt-[1em]"}>
                      Sit voluptatem accusantium doloremque laudantium, totam
                      rem aperiam. Sed ut perspiciatis unde omnis.
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
                    fill={"#FD4C19"}
                    sx={{ transition: "all .3s" }}
                    className={"inline-block text-center text-[#FD4C19]"}
                  />
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"h-[30px] md:-h-[50px] lg:h-[5.2vw] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
            <AchievementValues
              name1={"Locations"}
              name2={"Programs"}
              value1={10}
              value2={100}
            />
            <Box className={"h-[45px] w-full"}>
              <AgoraTransitionBox>
                <Box className={"h-[120px]"} />
              </AgoraTransitionBox>
            </Box>
            <AchievementValues
              name1={"Brands"}
              name2={"Menus"}
              value1={15}
              value2={30}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};
