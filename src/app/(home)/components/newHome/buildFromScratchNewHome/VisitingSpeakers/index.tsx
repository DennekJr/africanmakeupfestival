'use client'
import { Box } from "@mui/material";
import { AgoraBox, AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";
import { useMemo } from "react";
import {
  SPEAKERSCONSTANTS
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/VisitingSpeakers/Speakers/speakers.constants";
import { Speakers } from "@/app/(home)/components/newHome/buildFromScratchNewHome/VisitingSpeakers/Speakers";

export const VisitingSpeakers = () => {
  const speakers = useMemo(() => Object.values(SPEAKERSCONSTANTS), []);
  return <AgoraTransitionBox>
    <Box className={'mx-auto max-w-[1320px] flex relative'}>
      <Box className={'z-[2] w-full flex relative min-h-1'}>
        <Box className={'py-0 px-[15px] flex w-full'}>
          <AgoraBox className={'w-full'}>
            <AgoraTransitionBox>
              <Box className={'relative'}>
                <span className={'mb-[1em] text-[14px] uppercase font-semibold text-[#FD4C19] block text-center'}>Speakers</span>
                <h1 className={'leading-[1em] m-0 items-center text-[#FD4C19] text-[27px] md:text-[44px] lg:text-[57px] text-center font-extrabold'}>Brands Visiting</h1>
              </Box>
            </AgoraTransitionBox>
            <Box className={"relative w-full mb-0 h-[55px]"}>
              <AgoraTransitionBox className={'h-[55px]'}>
                <Box className={'h-[55px]'}></Box>
              </AgoraTransitionBox>
            </Box>
            {/*SPEAKERS*/}
            <Box className={'w-full mb-0'}>
              <AgoraTransitionBox className={'mb-[-30px]'}>
                <Box className={'relative'}>
                  <Box className={'flex flex-wrap lg:!mr-[-10px] 2xl:!mr-[-30px]'}>
                    {speakers.map((speaker, index) => {
                      return <Speakers speaker={speaker} key={index} />
                    })}
                  </Box>
                </Box>
              </AgoraTransitionBox>
              <Box className={"h-[50px] md:h-[90px] w-full"}>
                <AgoraTransitionBox>
                  <Box className={"h-[120px]"} />
                </AgoraTransitionBox>
              </Box>
            </Box>
          </AgoraBox>
        </Box>
      </Box>
    </Box>
  </AgoraTransitionBox>
}