"use client"
import { Box } from "@mui/material";
import { AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export const AchievementValues = ({
  name1,
  name2,
  value1,
  value2,
}: {
  name1: string;
  name2: string;
  value1: number;
  value2: number;
}) => {
  const { ref, inView } = useInView({ threshold: 0});
  return (
    <section className={"w-full relative"} ref={ref as React.LegacyRef<HTMLElement> | undefined}>
      <Box className={"max-w-[1320px] flex mx-auto relative text-[#FD4C19]"}>
        <Box className={"w-1/2 relative flex"}>
          <Box className={"pr-[10px] lg:pr-[15px] flex w-full flex-wrap content-start"}>
            <Box className={"w-auto max-w-full"}>
              <AgoraTransitionBox className={"mb-[5px]"}>
                <Box
                  className={
                    "flex justify-center items-stretch flex-col-reverse"
                  }
                >
                  <Box
                    className={
                      "text-[60px] lg:text-[5.3em] flex flex-1 font-extrabold leading-[1em]"
                    }
                  >
                    <span
                      className={"text-end flex-grow-[1] whitespace-pre-wrap"}
                    ></span>
                    <span className={"flex-grow-0 box-border"}>
                      {inView ? <CountUp end={value1} duration={1} /> : value1}
                    </span>
                    <span
                      className={"text-start flex-grow-[1] whitespace-pre-wrap"}
                    >
                      +
                    </span>
                  </Box>
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"w-full"}>
              <AgoraTransitionBox>
                <Box className={"py-[12px] lg:py-[20px] flex"}>
                  <span
                    className={
                      "w-full flex border-[1px] border-solid border-[#FCD9CE]"
                    }
                  ></span>
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"w-full"}>
              <AgoraTransitionBox>
                <Box className={"relative"}>
                  <h5 className={"w-full flex text-[19px] lg:text-[24px] leading-[1.47em]"}>{name1}</h5>
                </Box>
              </AgoraTransitionBox>
            </Box>
          </Box>
        </Box>
        <Box className={"w-1/2 relative flex"}>
          <Box className={"pl-[10px] lg:pl-[15px] flex w-full flex-wrap content-start"}>
            <Box className={"w-auto max-w-full"}>
              <AgoraTransitionBox className={"mb-[5px]"}>
                <Box
                  className={
                    "flex justify-center items-stretch flex-col-reverse"
                  }
                >
                  <Box
                    className={
                      "text-[60px] lg:text-[5.3em] flex flex-1 font-extrabold leading-[1em]"
                    }
                  >
                    <span
                      className={"text-end flex-grow-[1] whitespace-pre-wrap"}
                    ></span>
                    <span className={"flex-grow-0 box-border"}>
                      {inView ? <CountUp end={value2} duration={1} /> : value2}
                    </span>
                    <span
                      className={"text-start flex-grow-[1] whitespace-pre-wrap"}
                    >
                      +
                    </span>
                  </Box>
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"w-full"}>
              <AgoraTransitionBox>
                <Box className={"py-[12px] lg:py-[20px] flex"}>
                  <span
                    className={
                      "w-full flex border-[1px] border-solid border-[#FCD9CE]"
                    }
                  ></span>
                </Box>
              </AgoraTransitionBox>
            </Box>
            <Box className={"w-full"}>
              <AgoraTransitionBox>
                <Box className={"relative"}>
                  <h5 className={"w-full flex leading-[1.47em]"}>{name2}</h5>
                </Box>
              </AgoraTransitionBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
