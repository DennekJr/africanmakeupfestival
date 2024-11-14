"use client";
import { Box, Button } from "@mui/material";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import React, { useMemo } from "react";
import { CALENDEREVENTCONSTANTS } from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents/calenderEventConstants";
import { AgoraBox } from "@/app/(home)/components/newHome/utils";
import { Event } from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents/Event";

export const CalenderEvents = () => {
  const events = useMemo(() => Object.values(CALENDEREVENTCONSTANTS), []);
  return (
    <section className={"px-[30px] lg:px-[70px] m-auto max-w-[1320px]"}>
      <Box
        sx={{
          transition:
            "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        }}
      >
        <Box className={"lg:p-8 flex mx-auto relative"}>
          <Box className={"md:w-full"}>
            <Box
              className={
                "px-0 py-[15px] flex flex-col w-full relative flex-wrap items-start"
              }
            >
              <Box className={"h-[50px] w-full"} />
              <AgoraBox className={"w-full relative"}>
                <Box
                  className={
                    "calenderTitleContainer flex mx-auto relative flex-wrap lg:flex-nowrap"
                  }
                >
                  <Box className={"lg:w-[34%] w-full relative flex min-h-[1%]"}>
                    <Box className={"lg:mr-[5%] px-0 w-full"}>
                      <Box
                        className={""}
                        sx={{
                          transition:
                            "background .3s,border .3s,border-radius .3s,box-shadow .3s, .4s",
                        }}
                      >
                        <span
                          className={
                            "mb-[0.9em] !text-[#FD4C19] text-[14px] leading-[18px] font-semibold uppercase opacity-[1]"
                          }
                        >
                          Calender
                        </span>
                        <h1
                          className={
                            "ml-[-1px] mt-0 leading-[1em] text-[27px] md:text-[44px] lg:text-[60px] text-[#FD4C19] font-extrabold"
                          }
                        >
                          Next Events
                        </h1>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    className={"w-full md:w-[65%] lg:w-[45%] relative flex min-h-[1%]"}
                  >
                    <Box className={"flex py-0 w-full flex-wrap items-start"}>
                      <Box className={"h-[15px] lg:h-[46px] w-full"} />
                      <Box
                        className={"w-full my-0 text-lightSecondary"}
                        sx={{
                          transition:
                            "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform ,4s",
                        }}
                      >
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </Box>
                    </Box>
                  </Box>
                  <Box className={"w-full md:w-[35%] lg:w-[21%] text-left md:text-right"}>
                    <Box className={"w-full p-0"}>
                      <Box className={"h-[15px] lg:h-[49px]"} />
                      <Box
                        className={""}
                        sx={{
                          transition:
                            "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform ,4s",
                        }}
                      >
                        <Box className={"align-top inline-block"}>
                          <Button
                            className={
                              "!text-[#FD4C19] !p-0 leading-[20px] !font-semibold mb-[10px]"
                            }
                            endIcon={<ArrowRightAltOutlined />}
                          >
                            View All Events
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </AgoraBox>
              <Box
                className={"py-8 lg:py-10 w-full"}
                sx={{
                  animationName: "agora-fadeinup",
                  animationDuration: "750ms",
                  animationFillMode: "both",
                  visibility: "visible",
                }}
              >
                <Box
                  className={"h-[1px] bg-[#FD4C19]"}
                  sx={{
                    transition:
                      "background .3s, border .3s, border-radius .3s, box-shadow .3s, transform .4s",
                  }}
                />
              </Box>

              {/*//Events*/}
              {events.map((event, index) => {
                return <Event event={event} key={index} />;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
