import Box from "@mui/material/Box";
import { PartnerUnderScore } from "@/app/(home)/sponsor/Partners/utils";
import Image from "next/image";
import { useMemo } from "react";
import { PARTNERS_MENU } from "@/app/(home)/sponsor/Partners/partners.constants";
import { FortyFiveDegreeArrow } from "@/app/(home)/sponsor/Hero/utils";
import { Button } from "@mui/material";
import * as React from "react";

export const Partners = () => {
  const sponsors = useMemo(() => Object.values(PARTNERS_MENU), []);

  return (
    <section className={"w-full py-24 lg:py-32 bg-[#ffffff]"}>
      <Box
        className={
          "[&>button]:justify-center mx-auto max-w-[1320px] grid gap-16 px-6"
        }
      >
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
          >
            <span className="relative max-w-full break-words">
              Here’s some{" "}
            </span>
            <span className="relative max-w-full break-words">
              partners
              <PartnerUnderScore />
            </span>
            <span className="relative max-w-full break-words">
              {" "}
              from our events
            </span>
          </pre>
        </Box>
        <Box className={"grid grid-cols-2 lg:grid-cols-5 !lg:gap-8 !gap-4"}>
          {sponsors.map((sponsor, index) => {
            return (
              <Box
                key={index}
                className={
                  "!col-span-1 rounded-md aspect-square w-full bg-[#F2F2F2] !grid place-content-center p-5"
                }
              >
                <Image
                  width={208}
                  height={208}
                  src={sponsor.src}
                  alt={sponsor.name}
                  style={{ color: "transparent" }}
                  className={"w-full h-auto object-contain"}
                />
              </Box>
            );
          })}
        </Box>
        <Box className={"flex justify-center"}>
          <Button
            className={
              // "!bg-[#0A090B] !text-[#FCFCFC] hover:bg-gray-1300/90 !text-xl !lg:text-[44.25px] font-medium [&>svg]:!size-[44.25px] [&>svg]:!stroke-2 !rounded-full !px-10 !py-8 w-auto"
              "partnerButton whitespace-nowrap ring-offset-background disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] !text-[#FCFCFC] !text-xl !lg:text-[44.25px] !font-medium [&>svg]:!size-[44.25px] [&>svg]:!stroke-2 !rounded-full !px-10 !py-8 !w-max"
            }
            endIcon={<FortyFiveDegreeArrow />}
          >
            Become A Partner
          </Button>
        </Box>
      </Box>
    </section>
  );
};
