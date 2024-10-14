import Box from "@mui/material/Box";
import React, { useMemo } from "react";
import { ATTENDINGMEDIA_MENU } from "@/app/(home)/media/AttendingMedia/attendingMedia.constants";
import { ImageComponent } from "@/app/components/ImageComponent";

export const AttendingMedia = () => {
  const images = useMemo(() => Object.values(ATTENDINGMEDIA_MENU), []);
  return (
    <section className={"w-full py-24 lg:py-32"}>
      <Box className={"mx-auto max-w-[1320px] grid gap-16 px-6"}>
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
          >
            <span className="relative max-w-full break-words">
              Some media houses that attend
            </span>
          </pre>
        </Box>
        <Box className={"grid grid-cols-2 lg:grid-cols-5 lg:gap-8 gap-4"}>
          {images.map((image, index) => (
            <div key={index} className="col-span-1 rounded-md aspect-square w-full bg-[#F2F2F2] grid place-content-center p-5">
              <ImageComponent
                alt={image.id}
                fetchPriority="high"
                width="208"
                height="208"
                decoding="async"
                className="w-full h-auto object-contain"
                fileName={image.src}
                style={{ color: 'transparent' }}
              />
            </div>
          ))}
        </Box>
      </Box>
    </section>
  );
};
