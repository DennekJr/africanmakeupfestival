import Box from "@mui/material/Box";
import Image from "next/image";
import { useMemo } from "react";
import { SPEAKERFULLGRID_MENU } from "./speakerFullGrid.constants";

export const SpeakerFullGrid = () => {
  const speakers = useMemo(() => Object.values(SPEAKERFULLGRID_MENU), []);

  return (
    <section
      className={
        "bg-black relative w-full py-24 bg-[url(https://www.africastartupfestival.com/grid-section.svg)] z-[9] bg-repeat-y bg-top text-white flex flex-col items-center [&>a]:max-w-[90%]"
      }
    >
      <Box className={"w-full lg:py-12"}>
        <Box className={"w-full max-w-[1320px] mx-auto space-y-10 p-6"}>
          <Box className="flex flex-col justify-between gap-4 text-primary">
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">S</span>
              <span className="relative max-w-full break-words">peakers</span>
            </pre>
          </Box>
          <Box className="grid relative grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 w-full z-[15]">
            {speakers.map((speaker, index) => (
              <Box className="grid gap-5" key={index}>
                <Image
                  alt={speaker.name}
                  fetchPriority="high"
                  width="316"
                  height="347"
                  decoding="async"
                  className="w-full rounded-sm aspect-[1/1.1] object-cover"
                  style={{ color: "transparent" }}
                  src={speaker.src}
                />
                <div className="grid gap-1.5 text-left">
                  <div>
                    <h3 className="text-xl lg:text-4xl leading-none font-medium text-primary">
                      {speaker.name}
                    </h3>
                  </div>
                  <div className="text-textColor">
                    <p>{speaker.position}</p>
                    <p>{speaker.companyOfWork}</p>
                  </div>
                </div>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};
