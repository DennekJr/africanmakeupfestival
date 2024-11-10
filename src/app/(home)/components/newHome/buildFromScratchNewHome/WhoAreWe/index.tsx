import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const WhoAreWe = () => {
  return (
    <section className={'mx-[auto] my-24'}>
      <Box className={"relative flex items-center justify-center flex-col m-6"}>
        <Box className={"absolute top-[-50%] left-0 w-full flex justify-start"}>
          <Image
            src={"/images/newHomeBuild/whoWeAreTopLeftImage.svg"}
            height={285}
            width={241}
            alt={"top right icon"}
            className="h-auto xl:max-w-[20%] lg:max-w-[15%] md:max-w-[13%] sm:max-w-[10%] max-w-[8%]"
          />
        </Box>
        <Box className={'relative max-w-[60%] lg:!max-w-[50%] xl:max-w-[1130px] flex justify-center text-center'}>
          <Box className={'absolute top-[-10%] right-[-10%]'}>
            <Image
              src={"/images/newHomeBuild/threeDash.svg"}
              height={78}
              width={76}
              alt={"top right icon"}
            />
          </Box>
          <Box className={"flex-wrap text-[#FD4C19]"}>
            <Typography>Who We Are</Typography>
            <Typography variant={"h1"} className={'break-words ' +
              'text-[40px] lg:text-[60px]'}>
              Expert chefs, Interactive workshops, and a world of flavors await
              you at our <span className={'text-[#FE9E11]'}>food festival</span>
            </Typography>
          </Box>
          <Box className={'absolute bottom-[-10%] left-[-10%] scale-y-[-1] scale-x-[-1]'}>
            <Image
              src={"/images/newHomeBuild/threeDash.svg"}
              height={78}
              width={76}
              alt={"bottom left icon"}
            />
          </Box>
        </Box>
        <Box className={"absolute bottom-[-50%] right-0 w-full flex justify-end"}>
          <Image
            src={"/images/newHomeBuild/whoWeAreBottomRightImage.svg"}
            height={215}
            width={203}
            alt={"top right icon"}
            className="h-auto xl:max-w-[20%] lg:max-w-[15%] md:max-w-[13%] sm:max-w-[10%] max-w-[8%]"
          />
        </Box>
      </Box>
    </section>
  );
};
