import Box from "@mui/material/Box";
import React, { useMemo } from "react";
import { EVENTSGRIDCONSTANTSMENU } from "@/app/(home)/exhibit/previousEvents/eventsGrid/eventsGrid.constants";
import Image from "next/image";

export const EventsGrid = () => {
  const exhibitors = useMemo(() => Object.values(EVENTSGRIDCONSTANTSMENU), []);
  return (
    <Box className={"grid grid-cols-2 lg:grid-cols-5 lg:gap-8 gap-4"}>
      {exhibitors.map((exhibitor, index) => {
        return <Box key={index}
                    className="group col-span-1 rounded-md aspect-square w-full bg-midGrey grid place-content-center p-5">
          <Image
            alt="Kora Pay"
            fetchPriority="high"
            width="208"
            height="208"
            decoding="async"
            className="w-full h-auto object-contain brightness-50 group-hover:brightness-100"
            style={{color: 'transparent'}}
            src={exhibitor.src}
          />
        </Box>
      })}
    </Box>
  );
};
