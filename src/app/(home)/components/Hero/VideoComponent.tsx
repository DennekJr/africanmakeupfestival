import React, { Suspense } from "react";
import { Skeleton } from "@mui/material";

export async function VideoComponent( ) {
  return (
    <Suspense fallback={<Skeleton variant="rectangular" width={'100%'} height={622} />}>
      <video
        poster={
          "/images/homeHeroPoster.webp"
        }
        preload={"none"}
        className={
          "w-full min-h-[622px] lg:min-h-screen !h-full object-cover relative bg-[#0A090B]"
        }
        aria-label="Video player"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={'/images/homeHero.mp4'} type={"video/mp4"} />
        Your browser does not support the video tag.
      </video>
    </Suspense>
  );
}
