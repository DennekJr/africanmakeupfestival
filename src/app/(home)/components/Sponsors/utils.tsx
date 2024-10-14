import Box from "@mui/material/Box";
import React, { useMemo } from "react";
import { SPONSORGIRD_MENU } from "./sponsors.constants";
import { ImageComponent } from "../../../components/ImageComponent";

export const SponsorIcons = () => {
  const sponsors = useMemo(() => Object.values(SPONSORGIRD_MENU), []);
  return (
    <Box className={"grid space-y-8"}>
      {sponsors.map((sponsor, index) => {
        return (
          <Box className="flex flex-col space-y-5" key={index}>
            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center font-medium">
              {sponsor.name}
            </h3>
            <Box className="flex flex-wrap gap-4 justify-center">
              {sponsor.group.map((group, index) => {
                return (
                  <a
                    key={index}
                    target="_blank"
                    className="p-6 bg-gray-300 rounded-sm aspect-[1/0.4] flex items-center justify-center"
                    href={group.href}
                  >
                    <ImageComponent
                      fileName={group.src}
                      className={"object-contain object-center select-none h-16"}
                      alt={group.name}
                      style={{ color: "transparent" }}
                      loading="lazy"
                      width="270"
                      height="73"
                    />
                  </a>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
