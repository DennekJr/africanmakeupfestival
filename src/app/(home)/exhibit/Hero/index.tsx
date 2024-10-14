import Box from "@mui/material/Box";
import { ImageComponent } from "../../../components/ImageComponent";
import React from "react";

export const Hero = () => {
  return (
    <section
      className={
        "relative grid lg:grid-cols-2 w-full lg:min-h-screen bg-[#0A090B] text-white"
      }
    >
      <Box
        className={
          "col-span-1 flex flex-col justify-center !px-6 py-12 lg:p-14 gap-12 max-w-[660px] ml-auto"
        }
      >
        <div className="grid gap-6">
          <div>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
            >
              <span className="relative max-w-full break-words">
                The brightest{" "}
              </span>
              <span className="relative max-w-full break-words">
                startups
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
              <span className="relative max-w-full break-words"> and </span>
              <span className="relative max-w-full break-words">
                enterprises
                <svg
                  width="315"
                  height="15"
                  viewBox="0 0 315 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full absolute left-0 -bottom-2"
                >
                  <path
                    d="M315 2.21477C313.396 2.11409 311.926 2.11409 310.322 2.11409C308.719 2.11409 307.249 2.01342 305.645 1.91275C302.17 1.71141 298.829 1.4094 295.354 1.20805C288.806 0.805369 282.123 0.402685 275.575 0.302013C269.561 0.100671 263.413 0 257.399 0C255.796 0 254.192 0 252.722 0C246.708 0.100671 240.694 0.100671 234.68 0.201342C220.647 0.503356 206.481 0.805369 192.448 1.30872C178.683 1.81208 164.917 2.31544 151.286 2.91946C144.603 3.22148 137.787 3.52349 131.105 3.8255C123.755 4.32886 116.404 4.63087 109.188 5.03356C94.0857 5.9396 79.1175 6.74497 64.0157 7.65101C50.9185 8.45638 37.955 9.56376 24.9915 10.9732C16.7056 11.9799 8.28596 13.0872 0 14.1946C9.48876 14.698 19.1112 14.8993 28.7336 15C35.0148 15 41.2961 14.8993 47.4438 14.7987C51.4531 14.698 55.4624 14.4966 59.6054 14.2953C62.1447 14.1946 64.5503 13.9933 66.9559 13.7919C73.5045 13.2886 80.1867 12.8859 86.7353 12.3826C94.353 11.8792 101.837 11.2752 109.455 10.7718C117.206 10.2685 125.091 9.7651 132.843 9.26175C139.792 8.85906 146.875 8.45638 153.958 8.05369C160.774 7.65101 167.724 7.34899 174.54 7.04698C181.489 6.74497 188.305 6.44295 195.255 6.14094C202.338 5.83893 209.287 5.73826 216.37 5.53691C229.2 5.13423 242.03 5.03356 254.994 4.93289C262.21 4.93289 269.294 4.73154 276.51 4.5302C283.594 4.32886 290.677 4.12752 297.626 3.8255C300.433 3.72483 303.373 3.62416 306.179 3.42282C307.516 3.32215 308.986 3.22148 310.322 3.02013C311.525 2.81879 312.728 2.51678 313.931 2.41611C314.332 2.31544 314.599 2.21477 315 2.21477Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="relative max-w-full break-words">
                {" "}
                join us to exhibit every year.{" "}
              </span>
            </pre>
          </div>
          <div>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal text-gray-500"
            >
              <span className="relative max-w-full break-words">
                See why the likes of Remita, YellowCard, Shuttlers, Flickwheel,
                Travel Tank, and ProDevs join us as exhibitors.
              </span>
            </pre>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-[#FCFCFC] bg-transparent text-[#FCFCFC] h-14 px-6 py-4 rounded-full w-full md:w-auto">
            <span>BOOK A STAND</span>
          </button>
          <a
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F4F4F5] text-[#18181B] hover:bg-secondary/80 h-14 px-6 py-4 rounded-full w-full md:w-auto"
            href="https://airtable.com/appccZTnrTPxSkiUH/pagqA0t5kero5g0ZP/form"
          >
            <span>RESERVE A STAND</span>
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M13.2078 4.63574C12.6555 4.63574 12.2078 5.08346 12.2078 5.63574C12.2078 6.18803 12.6555 6.63574 13.2078 6.63574H16.4504L5.42961 17.6566C5.03909 18.0471 5.03909 18.6802 5.42961 19.0708C5.82014 19.4613 6.4533 19.4613 6.84383 19.0708L17.8646 8.04996V11.2926C17.8646 11.8449 18.3124 12.2926 18.8646 12.2926C19.4169 12.2926 19.8646 11.8449 19.8646 11.2926V5.63574C19.8646 5.08346 19.4169 4.63574 18.8646 4.63574H13.2078Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </Box>
      <Box className={"col-span-1 relative"}>
        <ImageComponent
          fileName={'images/sponsorHero'}
          className={"object-cover object-left-bottom h-full w-full min-h-[545px] max-h-[545px] lg:max-h-full"}
          alt={'2024 speaker'}
          style={{ color: "transparent" }}
          loading={'eager'}
          width="2208"
          height="2028"
        />
      </Box>
    </section>
  );
};
