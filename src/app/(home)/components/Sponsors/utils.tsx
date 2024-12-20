import Box from "@mui/material/Box";
import Image from "next/image";
import { useMemo } from "react";
import { SPONSORGIRD_MENU } from "./sponsors.constants";

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
                    <Image
                      alt={group.name}
                      loading="lazy"
                      width={270}
                      height={73}
                      decoding="async"
                      className="object-contain object-center select-none w-auto h-16"
                      src={group.src}
                      style={{ color: "transparent", filter: 'brightness(0)', boxShadow: '0 0 0px rgba(0, 0, 0, 1)' }}
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
