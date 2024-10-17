"use client"
import Box from "@mui/material/Box";
import {
  NextSlide,
  PreviousSlide,
  TestimonialsUnderscore,
} from "@/app/(home)/exhibit/Testimonials/utils";
import { useMemo, useRef } from "react";
import {
  TESTIMONIALSCONSTANTSMENU
} from "@/app/(home)/exhibit/Testimonials/TestimonialCarousel/testimonials.constants";
import { useSwiper } from 'swiper/react';
import TestimonialSlider from "@/app/(home)/exhibit/Testimonials/TestimonialCarousel/Slider";


export const Testimonials = () => {
  const swiperRef = useRef();
  const testimonies = useMemo(() => Object.values(TESTIMONIALSCONSTANTSMENU), []);
  const swiper = useSwiper();
  const handlePreviousClick = () => {
    if(swiperRef !== null){
      swiperRef.current.slidePrev();
    }
    console.log()
  };
  const handleNextClick = () => {
    if(swiper !== null){
      swiperRef.current.slideNext();
    }
  };
  return (
    <section className={"w-full py-24 lg:py-32"}>
      <Box className={"relative w-full grid gap-6 lg:gap-12"}>
        <Box
          className={"grid max-w-[1320px] mx-auto gap-6 lg:gap-12 px-6 lg:px-0"}
        >
          <div className="col-span-1 grid grid-cols-2">
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
            >
              <span className="relative max-w-full break-words">
                Testimonials <TestimonialsUnderscore />
              </span>
            </pre>
            <div className="flex justify-end gap-5 lg:gap-10">
              <PreviousSlide handleClick={handlePreviousClick} />
              <NextSlide handleClick={handleNextClick} />
            </div>
          </div>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
          >
            <span className="relative max-w-full break-words">
              From innovative startups to thriving enterprises, discover what
              our past exhibitors have to say about the exposure, networking
              opportunities, and business growth they experienced by
              participating in the Africa Startup Festival.
            </span>
          </pre>
        </Box>
        <Box className={'overflow-hidden'}>
          <Box className={'flex -ml-4'}>
            <TestimonialSlider data={testimonies} swiperRef={swiperRef}/>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
