import Box from "@mui/material/Box";
import { SpeakersImgScribble, WhiteBGButton } from "../../../../utils";
import { ImageComponent } from "../../../../components/ImageComponent";
import React from "react";

export const ApplyForExhibit = () => {
  return (
    <Box className={"w-full py-16 lg:py-24"}>
      <Box className={"max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-10 px-6"}>
        <Box
          className={"col-span-1 flex flex-col justify-between gap-8 lg:gap-16"}
        >
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
          >
            <span className="relative max-w-full break-words">Apply to</span>
            <span className="relative max-w-full break-words">
              Exhibit
              <svg
                width="170"
                height="102"
                viewBox="0 0 170 102"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <g clipPath="url(#clip0_3959_13362)">
                  <path
                    d="M8.19592 75.9459C8.19592 77.7924 8.19592 79.3131 8.19592 80.8338C8.19592 82.2459 7.51795 83.4408 4.97557 83.5494C2.4332 83.658 1.24675 82.5718 1.07726 81.1597C0.568787 77.4666 -0.617655 73.6648 0.399295 70.0803C2.2637 63.1285 2.60269 56.0681 4.29761 49.1163C8.36541 32.8231 19.7214 19.0282 39.8909 8.60051C47.6875 4.58152 56.6706 1.75736 66.5011 0.345278C67.3485 0.236657 68.196 0.0194136 69.213 0.0194136C71.0774 -0.0892079 72.7723 0.236657 73.4503 1.54011C74.1282 3.06082 72.7723 3.92979 70.7384 4.36427C68.535 4.79876 66.1621 5.12463 63.9587 5.55911C53.6197 7.84016 44.9756 11.6419 37.518 16.6385C27.6875 23.1558 20.7383 30.7593 16.84 39.5576C17.518 39.0145 18.1959 38.4714 18.8739 37.9283C19.5519 37.2766 20.2298 36.5162 20.9078 35.8645C31.4163 25.2196 45.6536 17.6161 64.2977 13.2712C98.196 5.66773 135.484 14.6833 153.789 27.7179C170.569 39.7749 174.467 53.3526 164.806 68.3424C159.891 76.0545 152.433 82.5718 142.094 87.677C115.993 100.494 86.6706 105.056 54.2977 99.9512C34.4671 96.8012 19.5519 89.3063 10.2298 77.5752C9.89083 77.1407 9.55185 76.8148 9.21287 76.3804C9.21287 76.3804 9.04338 76.2717 8.19592 75.9459ZM78.7045 96.8012C95.3147 96.6926 111.755 93.8684 126.84 88.2201C140.738 83.0063 151.247 75.9459 157.349 66.3872C165.654 53.4612 162.433 41.7301 148.027 31.1938C141.247 26.1972 132.772 22.7213 123.45 20.1144C90.2299 10.6643 53.7892 16.3126 32.4332 34.2352C23.6197 41.6215 17.179 49.8767 12.4332 58.7837C11.5858 60.3044 11.4163 62.0423 11.7552 63.563C14.9756 76.2717 25.1451 85.8304 43.2807 91.8046C53.9587 95.4977 65.6536 96.8012 78.7045 96.8012Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3959_13362">
                    <rect width="170" height="102" fill="currentColor"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="relative max-w-full break-words">
              at the Africa Startup Festival 2024
            </span>
          </pre>
          <div className="flex flex-col gap-8">
            <pre className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base">
              <span className="relative max-w-full break-words">
                The Africa Startup Festival (#ASF) continues to be the epicenter
                of unique startup and enterprise solutions, showcasing the
                latest innovations and technologies. Our exhibitions provide a
                platform for startups to demonstrate their groundbreaking
                products and services, attracting key investors, partners, and
                customers. This year, we`re featuring even more exciting
                exhibits from diverse sectors, making #ASF the ultimate
                destination for discovering cutting-edge solutions.
              </span>
            </pre>
            <div className="flex flex-wrap gap-3">
              <WhiteBGButton>Apply to Exhibit</WhiteBGButton>
            </div>
          </div>
        </Box>
        <Box className={"col-span-1 relative"}>
          <SpeakersImgScribble />
          <ImageComponent
            fileName={'images/two-speakers'}
            className={"object-cover max-h-[420px] lg:max-h-none h-full lg:h-[858px] w-[640px] rounded-lg"}
            alt={'ASF 2023 Highlight - Remita Rep'}
            style={{ color: "transparent" }}
            loading={"lazy"}
            decoding="async"
            width="640"
            height="858"
          />
        </Box>
      </Box>
    </Box>
  );
};
