import Box from "@mui/material/Box";
import { useMemo } from "react";
import { STAGESMENU } from "./stages.constants";
import { StageCard } from "./components/StageCards";

export const Stages = () => {
  const stages = useMemo(() => Object.values(STAGESMENU), []);
  return (
    <section className={"w-full py-20 lg:py-32"}>
      <Box className={"mx-auto max-w-[1320px] grid gap-8 lg:gap-16 px-6"}>
        <Box className="grid lg:grid-cols-2">
          <Box className="space-y-3">
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">
                Three Stages,{" "}
              </span>
            </pre>
            <pre
              id="undefined-1"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading !text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">
                Same Global Influence.
              </span>
            </pre>
            <Box className="text-[#2C2A32]">
              <pre
                id="undefined-0"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading !text-xl font-normal"
              >
                <span className="relative max-w-full break-words">
                  The Africa Startup Festival 2024 is set to inspire and engage
                  with its unique format featuring three distinct stages, each
                  dedicated to showcasing innovation, knowledge, and
                  collaboration from around the globe.
                </span>
              </pre>
            </Box>
          </Box>
        </Box>
        <Box className={"grid lg:grid-cols-3 gap-8"}>
          {stages.map(({id, background, image, order, orderColor, stageBodyTextColor, stageTitleColor, stageBody, stageName, textColor}, index,) => {
            return <StageCard key={index} id={id} background={background} image={image} order={order} orderColor={orderColor} stageBodyTextColor={stageBodyTextColor} stageTitleColor={stageTitleColor}  stageBody={stageBody} stageName={stageName} textColor={textColor}/>
          })}
        </Box>
      </Box>
    </section>
  );
};
