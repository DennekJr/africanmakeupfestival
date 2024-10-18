"use client";
import React, { MutableRefObject } from "react";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCarousel } from "@/app/(home)/exhibit/Testimonials/TestimonialCarousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import './slider.styles.css';


interface DemoSliderProps {
  data: {id: string, src: string, alt: string}[];
  swiperRef:  MutableRefObject<undefined>;
}

const TestimonialSlider: React.FC<DemoSliderProps> = ({ data, swiperRef }) => {
  return (
          <Swiper
            slidesPerView={1.8}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            slidesPerGroup={1}
            autoplay={true}
            loop={true}
            pagination={false}
            navigation={{
              nextEl: '.review-swiper-button-next',
              prevEl: '.review-swiper-button-prev',
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data.map(({ id, src, alt }, index) => (
              <SwiperSlide key={index} id={id}>
                <TestimonialCarousel key={index} src={src} alt={alt} />
              </SwiperSlide>
            ))}
          </Swiper>
  );
};

export default TestimonialSlider;
