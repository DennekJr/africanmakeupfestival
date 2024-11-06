import Box from "@mui/material/Box";
import { useMemo } from "react";
import { EXHIBITORSCONSTNATSMENU } from "./2024-exhibitors.constants";
import Image from "next/image";

export const ExhibitorGrid = () => {
  const exhibitors = useMemo(() => Object.values(EXHIBITORSCONSTNATSMENU), []);
  return (
    <Box className={"flex flex-wrap gap-4 justify-center"}>
      {exhibitors.map((exhibitor, index) => {
        return (
          <Box
            key={index}
            className={
              "p-6 bg-[#F2F2F2] rounded-sm aspect-[1/0.4] flex items-center justify-center"
            }
          >
            <Image
              src={exhibitor.src}
              alt={exhibitor.id}
              width={270}
              height={73}
              style={{color: "transparent", filter: 'brightness(0)'}}
              className={"object-contain object-center select-none h-16"}
            />
          </Box>
        );
      })}
    </Box>
  );
};
