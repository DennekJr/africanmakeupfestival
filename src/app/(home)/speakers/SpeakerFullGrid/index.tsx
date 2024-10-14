import Box from "@mui/material/Box";
import React, { useMemo } from "react";
import { SPEAKERFULLGRID_MENU } from "./speakerFullGrid.constants";
import {ImageComponent} from "../../../components/ImageComponent";

export const SpeakerFullGrid = () => {
  const speakers = useMemo(() => Object.values(SPEAKERFULLGRID_MENU), []);

  return (
    <section
      className={
        "bg-[#0A090B] w-full lg:my-24 py-24 bg-[url(https://www.africastartupfestival.com/grid-section.svg)] bg-repeat-y bg-top text-white flex flex-col items-center [&>a]:max-w-[90%]"
      }
    >
      <Box className={"w-full lg:py-12"}>
        <Box className={"w-full max-w-[1320px] mx-auto space-y-10 p-6"}>
          <Box className="flex flex-col justify-between gap-4">
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">S</span>
              <span className="relative max-w-full break-words">peakers</span>
            </pre>
          </Box>
          <Box className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 w-full">
            {speakers.map((speaker, index) => (
              <Box className="grid gap-5" key={index}>
                <ImageComponent
                    alt={speaker.name}
                    width="316"
                    height="347"
                    className="w-full rounded-sm aspect-[1/1.1] object-cover"
                    fileName={speaker.src}
                    style={{ color: 'transparent' }}
                />
                <div className="grid gap-1.5 text-left">
                  <div>
                    <h3 className="text-xl lg:text-4xl leading-none font-medium">
                      {speaker.name}
                    </h3>
                  </div>
                  <div>
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
