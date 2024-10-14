import Box from "@mui/material/Box";
import Image from "next/image";

export const TestimonialCarousel = ({src, alt}:{src: string, alt: string}) => {
  return (
    <Box
      role="group"
      aria-roledescription="slide"
      className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-4/6"
      style={{transform: 'translate3d(3512px, 0px, 0px)'}}
    >
      <div className="p-1">
        <Image
          alt={alt}
          loading="lazy"
          width="998"
          height="663"
          decoding="async"
          className="w-full"
          src={src}
          style={{color: 'transparent'}}
        />
      </div>
    </Box>
  );
};
