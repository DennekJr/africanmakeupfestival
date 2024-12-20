import { Box } from "@mui/material";
import { useMemo } from "react";
import { ExperiencesConstants } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Experiences/experiences.constants";
import { Experience } from "@/app/(home)/components/newHome/buildFromScratchNewHome/Experiences/Experience";

export const Experiences = () => {
  const experiences = useMemo(() => Object.values(ExperiencesConstants), []);
  return (
    <section className={'px-[15px] md:px-[70]'} style={{ zIndex: 2 }}>
      <Box className={'flex mx-auto relative'}>
        <Box className={'w-full p-4 md:p-8'}>
          <Box className={'m-0 relative flex-wrap md:mr-[-30px]'} sx={{transition: 'background .3s, border .3s, border-radius .3s, box-shadow .3s, transform .2s, .4s'}}>
            {experiences.map((experience, index) => {
              return <Experience key={index} experience={experience} />
            })}
          </Box>
        </Box>
      </Box>
    </section>
  );
};
