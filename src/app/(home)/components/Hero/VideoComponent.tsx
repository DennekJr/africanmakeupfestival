import React, { Suspense } from "react";
import { list } from "@vercel/blob";
import * as process from "process";

export async function VideoComponent({ fileName }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  const { url } = blobs[0];
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <video
        poster={
          "https://d2qar8dtiykptj.cloudfront.net/africa-startup-festival/home-page-hero-video-poster-000024zdmii89.png"
        }
        preload={"none"}
        className={
          "w-full min-h-[622px] lg:min-h-screen !h-full object-cover relative bg-gray-1300"
        }
        aria-label="Video player"
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
      >
        <source src={url} type={"video/mp4"} />
        Your browser does not support the video tag.
      </video>
    </Suspense>
  );
}
