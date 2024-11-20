// "use client";
import Box from "@mui/material/Box";
import React from "react";
import { HeroButtons } from "@/app/(home)/components/Hero/HeroButtons";
import { VideoComponent } from "@/app/(home)/components/Hero/VideoComponent";

export const Hero = () => {
  return (
    <section
      style={{
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
        transition:
          "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s"
      }}
      className={
        "relative w-full h-[100vh]"
      }
    >
      <VideoComponent />
      <Box
        className={
          "absolute top-0 right-0 bottom-0 left-0 z-[2] bg-overlay w-full h-full flex flex-col items-center justify-center text-gray-100 gap-8 p-4"
        }
      >
        <Box className={"lg:max-w-[790px] xl:max-w-[1135px] mx-auto"}>
          <pre
            id="undefined-0"
            className={
              "font-montserrat uppercase font-extrabold w-full break-words whitespace-pre-wrap min-h-6 text-center heading text-5xl md:text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px]"
            }
          >
            <span
              className={
                "relative stroke-primary text-transparent max-w-full break-words leading-none flex flex-col"
              }
            >
              <span
                className={
                  "!text-[25px] lg:text-5xl text-textColor leading-[0.8]"
                }
              >
                Africa
              </span>
              <span className="text-primary leading-[0.8]">Skincare</span>
              <span
                className={
                  "relative max-w-full break-words text-textColor leading-[0.8]"
                }
              >
                Festival
              </span>
            </span>
          </pre>
          <pre
            id="undefined-1"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
          />
          <pre
            id="undefined-2"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center font-medium heading text-2xl"
          >
            <span className="relative max-w-full break-words">
              Unleashing Africa&apos;s True Glow
            </span>
          </pre>
          <pre
            id="undefined-3"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
          ></pre>
        </Box>
        <HeroButtons />
      </Box>
    </section>
  );
};
