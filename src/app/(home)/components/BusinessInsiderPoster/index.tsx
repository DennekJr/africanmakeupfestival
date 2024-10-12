import Box from "@mui/material/Box";
import React from "react";
import Image from "next/image";

export const BusinessInsiderPoster = () => {
  return (
    <Box className={"w-full py-12 px-6 xl:px-0 xl:py-32"}>
      <Box
        className={
          "max-w-[1320px] relative overflow-clip bg-gray-1300 mx-auto grid rounded-3xl text-white lg:min-h-[789px]"
        }
      >
        <Box className="col-span-1 flex flex-col lg:flex-row z-[2]">
          <Box className="w-full lg:w-[62.88%]">
            <Image
              alt="ASF 2023 stage view"
              loading="lazy"
              width="830"
              height="789"
              decoding="async"
              className="w-full lg:h-full object-cover h-[300px]"
              style={{ color: "transparent" }}
              src="/images/speakers.png"
            />
          </Box>
          <Box className="flex-1 flex flex-col py-8 lg:py-12 px-4 gap-24 justify-between bg-[#09090b]">
            <Box className="*:!text-5xl">
              <Box
                id="undefined-0"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
              >
                <span className="relative max-w-full break-words">
                  “Africa’s foremost deal-making and networking event ”
                </span>
              </Box>
            </Box>
            <Box>
              <Box
                id="undefined-0"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
              >
                <span className="relative max-w-full break-words">
                  BUSINESS
                </span>
              </Box>
              <Box
                id="undefined-1"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
              >
                <span className="relative max-w-full break-words">INSIDER</span>
              </Box>
            </Box>
          </Box>
        </Box>
        <svg
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -left-[100%] -bottom-1/ w-[210%] lg:-left-[10%] text-[hsla(0,_0%,_99%,_0.05)] z-[1] lg:w-[150%]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.1212 0H15.8349V10.121L12.0439 0.737625L9.92504 1.5928L13.8159 11.2201L6.47202 3.87914L4.85571 5.49545L11.894 12.5338L2.77214 8.54587L1.85819 10.6412L11.5061 14.8583H0.976562V17.1446H11.5061L1.85819 21.3588L2.77214 23.4541L11.8911 19.4692L4.85277 26.5075L6.46908 28.1238L13.8101 20.7828L9.91917 30.4101L12.038 31.2653L15.829 21.8819V32.0029H18.1153V21.8819L21.9063 31.2653L24.0251 30.4101L20.1372 20.7828L27.4782 28.1238L29.0945 26.5075L22.0562 19.4692L31.1751 23.4541L32.0891 21.3588L22.4412 17.1417H32.9707V14.8554H22.4412L32.0891 10.6383L31.1751 8.54293L22.0562 12.5279L29.0945 5.48958L27.4782 3.87327L20.1372 11.2143L24.0251 1.58692L21.9063 0.731748L18.1153 10.1152V0H18.1212Z"
            fill="currentColor"
          ></path>
        </svg>
      </Box>
    </Box>
  );
};
