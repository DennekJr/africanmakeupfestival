// "use client";
import Box from "@mui/material/Box";
import React from "react";
import { TransparentArrowButton, WhiteTicketButton } from "../../../utils";
import { VideoComponent } from "./VideoComponent";


export const Hero = () => {
  return (
    <section className={"relative w-full lg:min-h-screen"}>
      <VideoComponent />
      <Box
        className={
          "absolute top-0 right-0 bottom-0 left-0 z-[2] bg-overlay w-full h-full flex flex-col items-center justify-center text-gray-100 gap-8 p-4"
        }
      >
        <Box className={"lg:max-w-[790px] xl:max-w-[1135px] mx-auto"}>
          <pre
            id="undefined-0"
            className={
              "font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center font-medium heading text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px]"
            }
          >
            <span className={"relative max-w-full break-words"}>
              Africa’s Skincare{" "}
            </span>
            <span className={"relative max-w-full break-words"}>
              Fest
              <svg
                width="266"
                height="25"
                viewBox="0 0 266 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2.5 left-0 center rotate-6 max-w-full"
              >
                <g clipPath="url(#clip0_240_199)">
                  <path
                    d="M266 3.69128C264.646 3.52349 263.404 3.52349 262.05 3.52349C260.696 3.52349 259.454 3.3557 258.1 3.18792C255.166 2.85235 252.345 2.34899 249.41 2.01342C243.88 1.34228 238.238 0.671141 232.708 0.503356C227.629 0.167785 222.438 0 217.359 0C216.005 0 214.651 0 213.409 0C208.331 0.167785 203.252 0.167785 198.174 0.33557C186.324 0.838926 174.361 1.34228 162.512 2.18121C150.888 3.02013 139.263 3.85906 127.752 4.86577C122.109 5.36913 116.354 5.87248 110.711 6.37584C104.504 7.21477 98.297 7.71812 92.2028 8.38926C79.4501 9.89933 66.8104 11.2416 54.0577 12.7517C42.9979 14.094 32.0509 15.9396 21.1039 18.2886C14.1069 19.9664 6.99703 21.8121 0 23.6577C8.01273 24.4966 16.1383 24.8322 24.2639 25C29.5681 25 34.8723 24.8322 40.0636 24.6644C43.4493 24.4966 46.835 24.1611 50.3335 23.8255C52.4777 23.6577 54.5091 23.3221 56.5405 22.9866C62.0704 22.1477 67.7132 21.4765 73.2431 20.6376C79.6759 19.7987 85.9958 18.7919 92.4285 17.953C98.9741 17.1141 105.633 16.2752 112.178 15.4362C118.047 14.7651 124.028 14.094 130.009 13.4228C135.765 12.7517 141.633 12.2483 147.389 11.745C153.258 11.2416 159.013 10.7383 164.882 10.2349C170.863 9.73154 176.731 9.56376 182.713 9.22819C193.547 8.55705 204.381 8.38926 215.328 8.22148C221.422 8.22148 227.403 7.88591 233.498 7.55034C239.479 7.21477 245.46 6.87919 251.329 6.37584C253.699 6.20805 256.182 6.04027 258.552 5.7047C259.68 5.53691 260.922 5.36913 262.05 5.03356C263.066 4.69799 264.081 4.19463 265.097 4.02685C265.436 3.85906 265.661 3.69128 266 3.69128Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_240_199">
                    <rect width="266" height="25" fill="currentColor"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className={"relative max-w-full break-words"}>
              val
            </span>
          </pre>
          <pre
            id="undefined-1"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
          />
          <pre
            id="undefined-2"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center font-medium heading text-2xl"
          >
            <span className="relative max-w-full break-words">
              Discover the Future of Skincare Innovations in Africa
            </span>
          </pre>
          <pre
            id="undefined-3"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
          ></pre>
        </Box>
        <Box
          className={
            "flex flex-col lg:flex-row gap-4 w-full items-center justify-center"
          }
        >
          <WhiteTicketButton name={"GET A TICKET"} />
          <TransparentArrowButton name={"BOOK A STAND"} />
        </Box>
      </Box>
    </section>
  );
};
