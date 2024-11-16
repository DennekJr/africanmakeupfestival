import { Box } from "@mui/material";
import { ArrowRightAltOutlined } from "@mui/icons-material";

export const Experience = ({experience}: {experience: {id: string, title: string, subtitle: string, image: string}}) => {
  return (
    <Box
      className={"md:pr-[30px] min-h-1 inline-block lg:w-[25%] md:w-[50%] w-full"}
    >
      <Box
        className={"relative text-left flex w-full h-full overflow-visible"}
        sx={{
          animationName: "agora-fadeinup",
          animationTimingFunction: "ease",
          animationDuration: "750ms",
          animationFillMode: 'both',
          visibility: 'visible'
        }}
      >
        <Box className={'group experience bg-[url(/images/mediaHero.webp)] flex bg-center bg-no-repeat bg-cover bg-[#2B2F3B] w-full max-w-full'}>
          <Box className={'before:absolute before:z-[-1] before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#00000033] w-full p-[10px] flex justify-end flex-col'}>
            <Box className={'bg-[#F8F0EE] py-[1.2rem] px-[1rem] w-full'}>
              <Box className={'flex justify-between items-end pb-[0.25rem]'}>
                <Box className={'max-w-[75%]'}>
                  <h5 className={'leading-[1.2em] m-0 text-primary font-extrabold'}>{experience.title}</h5>
                </Box>
                <Box className={'inline-block text-primary'}>
                  <ArrowRightAltOutlined className={'group-hover:rotate-[-25deg]'} sx={{transition: 'all 0.3s ease-out'}} />
                </Box>
              </Box>
              <Box className={'subTitleText text-lightSecondary h-0 opacity-0 max-w-[95%] text-[17px] font-light leading-[25px] overflow-hidden block'} sx={{transition: 'height 0.3s ease-out, margin-top 0.3s ease-out, opacity 0.3s ease-out'}}>
                <p>{experience.subtitle}</p>
              </Box>
            </Box>
          </Box>
          <a href="/" className={'absolute z-10 top-0 bottom-0 right-0 left-0 no-underline shadow-none'}></a>
        </Box>
      </Box>
    </Box>
  );
};
