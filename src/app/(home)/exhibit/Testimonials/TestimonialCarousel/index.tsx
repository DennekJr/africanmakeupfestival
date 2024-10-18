import Box from "@mui/material/Box";
import Image from "next/image";

export const TestimonialCarousel = ({src, alt}:{src: string, alt: string}) => {
  return (
    <Box
      role="group"
      className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-4/6"
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
