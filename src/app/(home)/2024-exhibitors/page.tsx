import * as React from "react";
import Box from "@mui/material/Box";
import { ExhibitorsUnderscore } from "@/app/(home)/2024-exhibitors/utils";
import { ExhibitorGrid } from "@/app/(home)/2024-exhibitors/ExhibitorGrid";

const Exhibitors: () => Promise<React.JSX.Element> = async () => {
  return (
    <>
      <Box className="h-24"></Box>
      <Box
        className={
          "w-full mx-auto max-w-[1320px] grid space-y-24 py-16 px-6 lg:px-0"
        }
      >
        <Box>
        <pre
          id="undefined-0"
          className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
        >
          <span className="relative max-w-full break-words text-black">
            2024 Exhibitors
            <ExhibitorsUnderscore />
          </span>
        </pre>
        </Box>
        <ExhibitorGrid />
      </Box>
    </>
  );
};

export default Exhibitors;