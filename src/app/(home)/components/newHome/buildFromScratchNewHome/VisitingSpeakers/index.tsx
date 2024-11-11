'use client'
import { Box } from "@mui/material";
import { AgoraBox, AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";

export const VisitingSpeakers = () => {
  return <AgoraTransitionBox>
    <Box className={'mx-auto max-w-[1320px] flex relative'}>
      <Box className={'z-[2] w-full flex relative min-h-1'}>
        <Box className={'py-0 px-[15px] flex'}>
          <AgoraBox className={'w-full'}>
            <AgoraTransitionBox>
              <Box className={'relative'}>
                <span className={'mb-[1em] text-[14px] uppercase font-semibold text-[#FD4C19] block text-center'}>Speakers</span>
              </Box>
            </AgoraTransitionBox>
          </AgoraBox>
        </Box>
      </Box>
    </Box>
  </AgoraTransitionBox>
}