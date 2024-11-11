import { Box } from "@mui/material";
import {
  AboutUsHoverMaskWithTransition,
  AboutUsLinkWithTransition,
  AgoraBox,
  AgoraTransitionNoTransformSpan
} from "@/app/(home)/components/newHome/utils";
import { SpeakerType } from "@/app/(home)/components/newHome/buildFromScratchNewHome/VisitingSpeakers/Speakers/speakers.types";
import Image from "next/image";

export const Speakers = ({ speaker }: { speaker: SpeakerType }) => {
  return (
    <Box className={"pb-[30px] inline-block align-top md:pr-[30px] w-full md:w-[50%] lg:w-[33.33%]"}>
      <AgoraBox className={"h-full w-full inline-block"}>
        {/*IMAGE*/}
        <Box className={'imageContainer overflow-hidden'}>
          <Image
            className={"relative speakerImg block w-full h-auto shadow-none border-none"}
            src={speaker.image}
            alt={speaker.name}
            height={696}
            width={570}
            style={{ transition: "transform 0.3s ease" }}
          />
          <Box
            className={
              "absolute p-[15px] translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] w-full items-center z-[99]"
            }
          >
            <Box className={"block align-middle m-0 text-center hover:transition-all hover:duration-300 hover:delay-100 hover:ease-out"}>
              {speaker.socialMedia.map((link, index) => {
                // const icon:SvgIconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    className={
                      "opacity-0 speakerLink transition-all duration-300 top-[20px] relative m-[3px] inline-block align-top leading-[1] text-center"
                    }
                  >
                    <AgoraTransitionNoTransformSpan className={'flex items-center justify-center text-black bg-white hover:bg-[#E58800] hover:text-white border-none text-[16px] w-[45px] h-[45px] leading-[45px] rounded-full bg-cover bg-top'}>
                      <link.icon className={'before:mt-[-1px]'} />
                    </AgoraTransitionNoTransformSpan>
                  </a>
                );
              })}
            </Box>
          </Box>
          <AboutUsLinkWithTransition />
          <AboutUsHoverMaskWithTransition />
        </Box>
        <Box className={"mt-[24px]"}>
          <Box className={"break-words box-border"}>
            <h4
              className={
                "text-[22px] font-extrabold leading-[1.2em] text-[#FD4C19] inline"
              }
            >
              {speaker.name}
            </h4>
            <Box
              className={"text-[16px] leading-[20px] text-[#363332] mt-[10px]"}
            >
              {speaker.position}
            </Box>
          </Box>
        </Box>
      </AgoraBox>
    </Box>
  );
};
