import Box from "@mui/material/Box";
import { ImageComponent } from "../../../../components/ImageComponent";
import React from "react";

export const TestimonialCarousel = ({src, alt}:{src: string, alt: string}) => {
  return (
    <Box
      role="group"
      aria-roledescription="slide"
      className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-4/6"
      style={{transform: 'translate3d(3512px, 0px, 0px)'}}
    >
      <div className="p-1">
        <ImageComponent
          fileName={src}
          alt={alt}
          loading="lazy"
          width="998"
          height="663"
          className="w-full"
          style={{color: 'transparent'}}
        />
      </div>
    </Box>
  );
};
