import Box from "@mui/material/Box";
import { useMemo } from "react";
import { MEDIASOURCES_MENU } from "./mediaSources.constants";
import Image from "next/image";

export const MediaSources = () => {
  const sources = useMemo(() => Object.values(MEDIASOURCES_MENU), []);
  return (
    <section className={"w-full py-20 lg:py-32"}>
      <Box
        className={"mx-auto max-w-[1320px] grid gap-8 lg:gap-16 px-6 lg:px-0"}
      >
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
          >
            <span className="relative max-w-full break-words">
              Our Media Sources
            </span>
          </pre>
        </Box>
        <Box className={"grid lg:grid-cols-3 gap-8"}>
          {sources.map((mediaSource, index) => (
            <a
              key={index}
              className="aspect-square rounded-xl overflow-clip relative"
              href=""
            >
              <Image
                alt={mediaSource.title}
                width="208"
                height="208"
                decoding="async"
                className="w-full object-cover h-[524px]"
                src={mediaSource.src}
                style={{color: 'transparent'}}
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 text-white p-4 font-medium text-5xl leading-[52.8px] tracking-[-1px]">
                {mediaSource.title}
              </div>
            </a>
          ))}
        </Box>
      </Box>
    </section>
  );
};
