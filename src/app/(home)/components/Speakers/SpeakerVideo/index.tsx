import Box from "@mui/material/Box";

export const SpeakerVideo = () => {
  return (
    <Box
      className={
        "grid gap-6 py-12 px-6 lg:gap-12 lg:py-20 mx-auto max-w-[1320px] w-full"
      }
    >
      <div>
        <pre
          id="undefined-0"
          className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
        >
          <span className="relative max-w-full break-words">2024 </span>
          <span className="relative max-w-full break-words">Lorem </span>
        </pre>
      </div>
      <div
        className={
          "overflow-clip rounded-3xl bg-white aspect-[1.1/1] lg:aspect-video"
        }
      >
        <div className="w-full h-full">
          <iframe
            className="w-full h-full"
            title="Africa Skincare Festival 2024 Recap"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            width="640"
            height="360"
            id="widget2"
            src="/images/speakerHome.mp4"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Box>
  );
};
