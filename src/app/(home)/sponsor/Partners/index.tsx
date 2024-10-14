import Box from "@mui/material/Box";
import { PartnerUnderScore } from "./utils";
import { useMemo } from "react";
import { PARTNERS_MENU } from "./partners.constants";
import { FortyFiveDegreeArrow } from "../Hero/utils";
import { Button } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {ImageComponent} from "../../../components/ImageComponent";

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
                <ImageComponent
                    alt={sponsor.name}
                    className={"w-full h-auto object-contain"}
                    width={208}
                    height={208}
                    fileName={sponsor.src}
                    style={{ color: 'transparent' }}
                />
              </Box>
            );
          })}
        </Box>
        <Box className={"flex justify-center"}>
          <Button
            className={
              "partnerButton whitespace-nowrap ring-offset-background disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] !text-[#FCFCFC] !font-medium [&>svg]:!size-[44.25px] [&>svg]:!stroke-2 !rounded-full !px-10 !py-8 !w-max"
            }
            endIcon={<FortyFiveDegreeArrow />}
          >
            <Typography className={"capitalize !text-xl lg:!text-[2.8rem]"}>
              Become a partner
            </Typography>
          </Button>
        </Box>
      </Box>
    </section>
  );
};
