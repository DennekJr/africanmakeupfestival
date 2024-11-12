"use client";
import { Box } from "@mui/material";
import { StarRateSharp } from "@mui/icons-material";
import { AnimatedSection } from "@/app/(home)/components/newHome/utils";

export const ActiveWordsCarousel = () => {
  return (
    <Box className={"flex w-[100vw] h-[17vw] overflow-hidden whitespace-nowrap"}>
      <AnimatedSection
        className={
          "opacity-100 w-full block z-0 absolute justify-start items-start flex-row"
        }
      >
        <Box className={"relative flex flex-col min-h-1"}>
          <Box className={"py-0 flex flex-wrap content-start relative w-full"}>
            <section className={"w-full relative flex"}>
              <Box className={"flex"}>
                <Box
                  className={
                    "translate-x-0 translate-y-0 scale-100 flex items-center justify-center"
                  }
                >
                  <span
                    className={
                      "opacity-100 text-[#FD4C19] font-semibold text-[155px]"
                    }
                  >
                    Skin
                  </span>
                  <span className={"opacity-100 text-[#FD4C19]"}>
                    <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
                  </span>
                </Box>
                <Box
                  className={
                    "translate-x-0 translate-y-0 scale-100 flex items-center justify-center"
                  }
                >
                  <span
                    className={
                      "opacity-100 text-[#FD4C19] font-semibold text-[155px]"
                    }
                  >
                    Care
                  </span>
                  <span className={"opacity-100 text-[#FD4C19] ml-[10px]"}>
                    <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
                  </span>
                </Box>
              </Box>
            </section>
          </Box>
          <Box className={"py-0 flex flex-wrap content-start relative w-full"}>
            <section className={"w-full relative flex"}>
              <Box className={"flex"}>
                <Box
                  className={
                    "translate-x-0 translate-y-0 scale-100 flex items-center justify-center"
                  }
                >
                  {" "}
                  <span
                    className={
                      "opacity-100 text-[#FD4C19] font-semibold text-[155px]"
                    }
                  >
                    Festival
                  </span>
                  <span className={"opacity-100 text-[#FD4C19]"}>
                    <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
                  </span>
                </Box>
                <Box
                  className={
                    "translate-x-0 translate-y-0 scale-100 flex items-center justify-center"
                  }
                >
                  <span
                    className={
                      "opacity-100 text-[#FD4C19] font-semibold text-[155px]"
                    }
                  >
                    Festival
                  </span>
                  <span className={"opacity-100 text-[#FD4C19] ml-[10px]"}>
                    <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
                  </span>
                </Box>
              </Box>
            </section>
          </Box>
        </Box>
      </AnimatedSection>
    </Box>
  );
};
