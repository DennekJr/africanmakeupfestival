import Box from "@mui/material/Box";
import { PartnerUnderScore } from "./utils";
import Image from "next/image";
import { useMemo } from "react";
import { PARTNERS_MENU } from "./partners.constants";
import * as React from "react";
import Typography from "@mui/material/Typography";

export const Partners = () => {
  const sponsors = useMemo(() => Object.values(PARTNERS_MENU), []);

  return (
    <section className={"w-full py-24 lg:py-32 bg-lightGrey"}>
      <Box
        className={
          "[&>button]:justify-center mx-auto max-w-[1320px] grid gap-16 px-6"
        }
      >
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] md:text-[45px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
          >
            <span className="relative max-w-full break-words">
              Here’s some{" "}
            </span>
            <span className="relative max-w-full break-words text-primary">
              partners
              <PartnerUnderScore />
            </span>
            <span className="relative max-w-full break-words">
              {" "}
              from the event
            </span>
          </pre>
        </Box>
        <Box
          className={
            "grid align-middle justify-center items-center grid-cols-2 lg:grid-cols-4 !lg:gap-8 !gap-4"
          }
        >
          {sponsors.map((sponsor, index) => {
            return (
              <Box
                key={index}
                className={
                  "group !col-span-1 rounded-md aspect-square w-full bg-midGrey !grid place-content-center p-5"
                }
              >
                <Image
                  width={208}
                  height={208}
                  src={sponsor.src}
                  alt={sponsor.name}
                  style={{ color: "primary" }}
                  className={
                    "w-[w-120px] lg:w-[150px] h-auto object-contain brightness-50 group-hover:brightness-100 " +
                    `${sponsor.name === "ar" ? "!h-[52px] !w-[52px] md:!h-[52px] md:!w-[52px] lg:!h-[52px] lg:!w-[52px]" : ""}`
                  }
                />
              </Box>
            );
          })}
        </Box>
        <Box className={"flex justify-center"}>
          <a
            className={
              "partnerButton block whitespace-nowrap ring-offset-background disabled:pointer-events-none !bg-primary !text-textColor !font-medium [&>svg]:!size-[44.25px] [&>svg]:!stroke-2 !rounded-none !px-10 !py-8 !w-max"
            }
            href="mailto:contact@africaskincarefestival.com"
          >
            <Typography className={"capitalize !text-xl lg:!text-[2.8rem]"}>
              Become a partner
            </Typography>
          </a>
        </Box>
      </Box>
    </section>
  );
};
