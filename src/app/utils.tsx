"use client";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { LocalActivity } from "@mui/icons-material";
import React from "react";
import Image from "next/image";

export const WhiteBGButton = styled(Button)({
  background: "#ffffff",
  color: "#000000",
  borderRadius: "1rem",
});

export const RightArrowButton = styled(Button)({
  background: "transparent",
  color: "hsl(0 0% 100%)",
  borderRadius: "1rem",
  borderWidth: "1px",
  borderColor: "hsl(0 0% 100%)",
});


export const WhiteTicketButton = ({ name, href }: { name: string, href: string }) => {
  return (
    // <Box className="relative flex bg-primary text-textColor">
    <a
      href={href}
      className="relative primary-bg-animation-hover primary-bg-animation-leave bg-primary text-textColor overflow-hidden !rounded-none inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-Color h-14 px-6 py-4 w-full md:w-auto"
    >
      <span>{name}</span>
      <LocalActivity />
    </a>
    // </Box>
  )
    ;
};

export const PrimaryButton = ({ name }: { name: string }) => {
  return (
    // <Box className="relative flex bg-primary text-textColor">
    <a
      href="mailto:contact@africaskincarefestival.com"
      className="relative hover:bg-primary/80 bg-primary text-textColor overflow-hidden !rounded-none inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-Color h-14 px-6 py-4 w-full md:w-auto"
    >
      <span>{name}</span>
    </a>
    // </Box>
  )
    ;
};

export const ValidateCodeButton = ({ name, onClick, loading }: {
  name: string,
  onClick: () => void,
  loading: boolean
}) => {
  return (
    // <Box className="relative flex bg-primary text-textColor">
    <Box
      loading={loading}
      onClick={onClick}
      className="relative transition-all hover:cursor-pointer hover:bg-primary/80 bg-primary text-textColor overflow-hidden inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-Color h-14 px-6 py-4 my-4 w-f w-full sm:w-[30%] rounded-full"
    >
      <span className={"hover:cursor-pointer"}>{name}</span>
      {loading &&
        <Image src={"images/loadingSpinner.svg"} width={25} height={25} className={"animate-spin"} alt={"spinner"} />}
    </Box>
    // </Box>
  )
    ;
};


export const TransparentArrowButton = ({ name, to }: { name: string, to: string }) => {
  return (
    <a
      className="white-bg-animation-hover white-bg-animation-leave inline-flex bg-lightGrey text-primary !rounded-none items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-6 py-4 w-full md:w-auto"
      data-sentry-component="Button_"
      href={to}
    >
      <span>{name}</span>
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
  );
};

export const WhiteBgArrowButton = ({
  name,
  classNames,
}: {
  name: string;
  classNames: string;
}) => {
  return (
    <Box
      className={
        `${classNames} ` +
        "!text-textColor rounded-none inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary !bg-primary text-xl w-full md:w-auto hover:!bg-primary/60"
      }
    >
      <span>{name}</span>
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
    </Box>
  );
};

export const MarqueeStarIcon = () => {
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1212 0H15.8349V10.121L12.0439 0.737625L9.92504 1.5928L13.8159 11.2201L6.47202 3.87914L4.85571 5.49545L11.894 12.5338L2.77214 8.54587L1.85819 10.6412L11.5061 14.8583H0.976562V17.1446H11.5061L1.85819 21.3588L2.77214 23.4541L11.8911 19.4692L4.85277 26.5075L6.46908 28.1238L13.8101 20.7828L9.91917 30.4101L12.038 31.2653L15.829 21.8819V32.0029H18.1153V21.8819L21.9063 31.2653L24.0251 30.4101L20.1372 20.7828L27.4782 28.1238L29.0945 26.5075L22.0562 19.4692L31.1751 23.4541L32.0891 21.3588L22.4412 17.1417H32.9707V14.8554H22.4412L32.0891 10.6383L31.1751 8.54293L22.0562 12.5279L29.0945 5.48958L27.4782 3.87327L20.1372 11.2143L24.0251 1.58692L21.9063 0.731748L18.1153 10.1152V0H18.1212Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const SpeakersImgScribble = () => {
  return (
    <svg
      width="470"
      height="48"
      viewBox="0 0 470 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute max-w-full bottom-0 -left-5"
    >
      <g clipPath="url(#clip0_337_528)">
        <path
          d="M16.0271 37.7238C17.2702 36.8341 18.5132 35.9444 19.7563 34.8767C20.9994 33.8091 22.4201 32.9194 23.6632 31.8517C26.6822 29.3605 29.7011 26.8693 32.7201 24.3781C32.0097 25.4458 31.1218 26.5134 30.4114 27.5811C29.7011 28.6487 28.9908 29.5385 28.1028 30.6061C27.7477 31.1399 27.2149 31.6738 26.8597 32.2076C26.327 32.7414 25.9718 33.4532 25.7942 34.165C25.4391 34.8767 25.2615 35.4106 25.0839 36.1223C24.7287 37.19 25.0839 38.6135 25.9718 39.3253C26.327 39.6812 26.8597 40.0371 27.3925 40.215C27.9253 40.393 28.6356 40.393 29.1684 40.215C29.8787 40.0371 30.589 40.0371 31.2994 39.8591C31.8321 39.6812 32.1873 39.5032 32.7201 39.3253C33.2528 39.1474 33.7856 38.9694 34.1407 38.6135C35.739 37.9018 37.1597 36.8341 38.7579 35.7664C40.3562 34.6988 42.1321 33.6311 43.7303 32.3855C45.5062 31.1399 47.1044 29.8943 48.7027 28.6487C50.301 27.5811 51.7217 26.3355 53.1423 25.0899C52.9648 25.2678 52.7872 25.4458 52.7872 25.6237C51.3665 27.4032 49.9458 29.3605 48.5251 31.1399C47.6372 32.2076 46.7493 33.2753 46.0389 34.3429C45.6838 34.8767 45.3286 35.5885 44.9734 36.3003C44.7958 36.8341 44.6183 37.3679 44.6183 37.9018C44.6183 38.4356 44.4407 38.9694 44.2631 39.5032C44.0855 40.393 44.0855 41.1047 44.6183 41.8165C44.9734 42.3503 45.6838 43.0621 46.3941 43.24C47.4596 43.418 48.5251 43.5959 49.7682 43.7739C50.301 43.7739 50.8337 43.9518 51.3665 43.7739C51.8992 43.7739 52.432 43.5959 52.9648 43.5959C54.0303 43.418 54.9182 43.0621 55.8061 42.7062C56.8716 42.3503 57.7595 41.8165 58.6475 41.4606C62.5543 39.5032 66.4612 37.19 70.1905 34.8767C71.9664 33.8091 73.5646 32.5635 75.3405 31.4958C74.275 32.9194 73.0319 34.3429 71.9664 35.7664C71.256 36.6562 70.5457 37.5459 69.8353 38.4356C69.125 39.3253 68.5922 40.0371 68.2371 41.1047C67.8819 41.9944 67.7043 42.8842 67.5267 43.7739C67.3491 45.0195 67.5267 46.0871 68.4146 46.9768C68.7698 47.3327 69.3026 47.6886 69.8353 47.8665C70.3681 48.0445 71.0784 48.0445 71.6112 47.8665C71.9664 47.8665 72.3215 47.6886 72.4991 47.6886C73.5646 47.5107 74.6301 47.3327 75.5181 47.1548C76.5836 46.9768 77.6491 46.6209 78.7146 46.0871C80.8456 45.1974 82.799 44.1297 84.7525 43.0621C88.6594 40.7488 92.3886 38.2576 96.1179 35.7664C96.6507 35.4106 97.1834 35.0547 97.7162 34.5209C97.7162 34.5209 97.7162 34.6988 97.5386 34.6988C97.1834 35.2326 96.8283 35.9444 96.6507 36.4782C96.2955 37.5459 96.6507 38.6135 96.8283 39.6812C97.1834 41.4606 99.1369 42.3503 100.913 41.9944C101.978 41.6386 103.044 41.4606 104.109 41.1047C105.352 40.7488 106.595 40.215 107.839 39.5032C110.325 38.4356 112.633 36.8341 114.764 35.4106C116.54 34.3429 118.138 33.0973 119.914 32.0297C123.288 29.8943 126.485 27.759 129.859 25.4458C131.635 24.2002 133.588 22.7766 135.364 21.531C134.654 22.4208 133.766 23.4884 133.056 24.3781C132.7 24.734 132.345 25.2678 131.99 25.6237C131.102 26.5134 130.392 27.4032 129.682 28.2929C128.971 29.3605 128.794 30.6061 128.794 31.8517C128.794 32.3855 128.971 32.9194 128.971 33.4532C128.971 33.6311 129.149 33.987 129.149 34.165C129.326 34.6988 129.504 35.0547 129.682 35.5885C129.859 36.1223 130.214 36.6562 130.569 37.19C131.102 37.7238 132.168 38.2576 133.056 38.2576C135.009 38.0797 137.14 37.9018 139.271 37.5459C141.225 37.19 143.178 36.4782 144.954 35.5885C148.683 33.987 152.235 32.0297 155.787 29.8943C158.273 28.4708 160.759 26.8693 163.245 25.2678C162.712 25.9796 162.002 26.5134 161.469 27.2252C160.404 28.4708 159.161 29.7164 158.095 30.962C157.207 31.8517 156.497 32.7414 155.609 33.6311C154.366 35.0547 153.3 36.6562 152.235 38.2576C151.347 39.6812 151.88 42.1724 153.478 42.8842C154.011 43.0621 154.366 43.418 154.899 43.5959C155.431 43.7739 155.964 43.9518 156.497 44.1297C157.562 44.3077 158.628 44.1297 159.871 43.9518C160.936 43.7739 162.002 43.24 162.89 42.7062C164.133 42.1724 165.376 41.4606 166.442 40.7488C167.507 40.215 168.395 39.6812 169.461 39.1474C170.526 38.6135 171.414 38.0797 172.48 37.3679C174.255 36.3003 176.031 35.2326 177.629 34.165C178.162 33.8091 178.695 33.4532 179.05 33.0973C178.873 33.6311 178.517 33.987 178.34 34.5209C177.807 35.5885 177.629 36.8341 178.34 37.9018C179.05 38.9694 180.116 39.5032 181.359 39.5032C182.247 39.5032 182.957 39.6812 183.667 39.6812C184.2 39.6812 184.733 39.5032 185.266 39.5032C185.798 39.3253 186.331 39.3253 186.686 39.1474C187.752 38.7915 188.64 38.2576 189.705 37.9018C190.593 37.3679 191.659 36.8341 192.547 36.3003C194.5 35.2326 196.276 33.987 198.229 32.9194C200.183 31.6738 202.314 30.4282 204.267 29.1826C208.352 26.5134 212.259 23.6664 216.343 20.9972C217.053 20.4634 217.586 20.1075 218.296 19.5737C218.119 19.7516 217.941 19.9296 217.941 20.1075C216.521 21.8869 214.922 23.8443 213.502 25.8017C212.791 26.6914 212.081 27.759 211.193 28.6487C210.305 29.8943 209.24 30.962 208.352 32.0297C207.997 32.5635 207.464 33.2753 207.109 33.987C206.576 34.8767 206.221 35.9444 205.866 37.012C205.51 37.7238 205.866 38.7915 206.221 39.5032C206.753 40.393 207.819 41.1047 209.062 41.1047C209.595 41.1047 210.128 41.1047 210.483 41.1047C211.015 41.1047 211.548 41.1047 211.903 41.1047C213.147 41.1047 214.39 40.7488 215.633 40.393C216.698 40.0371 217.586 39.6812 218.652 39.1474C219.895 38.6135 220.96 38.0797 222.203 37.3679C226.643 34.8767 230.905 32.3855 235.167 29.7164C239.252 27.0473 243.336 24.3781 247.42 21.531C249.374 20.1075 251.327 18.684 253.281 17.4384L253.103 17.6163C252.038 19.0399 250.795 20.4634 249.729 21.8869C249.019 22.7766 248.308 23.6664 247.598 24.5561C247.243 24.912 247.065 25.2678 246.888 25.6237C246.71 25.9796 246.533 26.5134 246.355 26.8693C246.177 27.2252 246.177 27.759 246.355 28.2929C246.355 29.0046 246.71 29.5385 246.888 30.2502C247.42 31.6738 248.841 32.7414 250.439 32.2076C252.393 31.6738 254.346 31.1399 256.3 30.6061C258.253 30.0723 260.029 29.1826 261.805 28.2929C264.113 27.2252 266.422 25.9796 268.553 24.912C271.394 23.4884 274.058 22.0649 276.9 20.4634C279.563 19.0399 282.049 17.6163 284.713 16.1928C284.003 16.9045 283.115 17.6163 282.405 18.3281C280.274 20.4634 277.965 22.4208 275.834 24.5561C273.348 26.8693 271.039 29.1826 268.553 31.4958C267.132 32.9194 265.712 34.3429 264.291 35.7664C263.403 36.6562 262.338 37.5459 261.45 38.4356C261.094 38.7915 260.917 39.1474 260.739 39.5032C260.562 39.8591 260.384 40.215 260.207 40.7488C260.029 41.1047 260.029 41.6386 260.029 41.9944C260.029 42.7062 260.207 43.24 260.207 43.9518C260.207 44.6636 260.384 45.3753 261.094 45.9092C261.805 46.6209 262.87 46.7989 263.758 46.6209C265.357 46.2651 267.132 45.9092 268.731 45.5533C270.329 45.1974 271.927 44.6636 273.525 43.9518C276.9 42.5283 280.274 40.9268 283.47 39.1474C284.891 38.4356 286.489 37.5459 287.91 36.6562C288.975 35.9444 290.218 35.2326 291.284 34.6988C292.527 33.987 293.77 33.2753 295.191 32.3855C294.836 32.7414 294.303 33.0973 293.948 33.4532C293.415 33.8091 292.882 34.165 292.527 34.6988C292.172 35.0547 291.994 35.4106 291.639 35.7664C291.462 36.1223 291.284 36.4782 291.106 37.012C290.929 37.5459 290.929 38.2576 291.106 38.7915C291.106 39.3253 291.284 39.6812 291.462 40.0371C291.994 41.1047 292.882 41.9944 294.125 42.5283C295.724 43.0621 297.322 42.8842 299.098 42.3503C299.986 42.1724 300.874 41.6386 301.761 41.2827C302.649 40.9268 303.36 40.5709 304.248 40.215C306.734 39.1474 309.22 38.0797 311.706 37.012C314.37 35.7664 316.856 34.3429 319.342 33.0973C320.941 32.2076 322.539 31.3179 324.137 30.4282C327.689 28.4708 331.241 26.3355 334.792 24.2002C337.101 22.7766 339.587 21.1752 341.896 19.7516C341.008 20.6413 340.297 21.709 339.41 22.5987C338.522 23.4884 337.634 24.5561 336.746 25.4458C335.858 26.5134 334.97 27.5811 334.082 28.6487C333.194 29.7164 332.661 30.962 331.951 32.2076C330.885 33.987 331.773 36.4782 333.904 37.012C334.615 37.19 335.325 37.3679 336.213 37.5459C336.746 37.7238 337.279 37.7238 337.811 37.7238C338.344 37.7238 338.877 37.5459 339.41 37.5459C340.475 37.3679 341.363 37.012 342.428 36.4782C343.316 36.1223 344.382 35.5885 345.27 35.0547C347.046 34.165 348.644 33.2753 350.42 32.3855C352.551 31.3179 354.504 30.0723 356.635 28.8267C358.411 27.759 360.187 26.6914 361.963 25.6237C361.785 25.8017 361.608 25.9796 361.43 26.1576C360.542 27.0473 359.654 28.1149 358.766 29.1826C357.878 30.2502 357.168 31.4958 357.168 32.9194C357.168 33.8091 357.523 34.3429 357.878 35.0547C358.056 35.5885 358.944 36.4782 359.477 36.6562C359.654 36.6562 359.832 36.8341 359.832 36.8341C360.365 37.19 360.897 37.3679 361.608 37.3679C362.318 37.3679 363.028 37.3679 363.561 37.19C364.982 36.8341 366.225 36.3003 367.468 35.5885C368.178 35.2326 368.889 34.8767 369.599 34.5209C370.309 34.165 371.197 33.6311 371.908 33.2753C373.328 32.3855 374.927 31.4958 376.347 30.6061C376.88 30.2502 377.413 29.8943 377.945 29.5385C377.59 29.8943 377.235 30.4282 376.88 30.7841C376.347 31.4958 375.637 32.2076 375.104 32.9194C374.216 33.987 373.328 34.8767 372.44 35.9444C371.552 37.0121 370.842 38.0797 370.132 39.1474C369.599 39.8591 369.599 40.9268 369.777 41.6386C369.954 42.3503 370.487 43.24 371.197 43.5959C371.552 43.7739 371.908 43.9518 372.44 44.1297C372.973 44.3077 373.328 44.4856 373.861 44.6636C374.394 44.8415 374.749 44.8415 375.282 44.8415C376.17 44.8415 376.88 44.6636 377.59 44.6636C378.833 44.4856 380.254 43.9518 381.497 43.418C382.74 42.8842 383.983 42.1724 385.226 41.6386C386.292 41.1047 387.357 40.7488 388.423 40.215C389.666 39.6812 391.087 38.9694 392.33 38.2576C394.461 37.19 396.592 36.1223 398.545 34.8767C400.144 33.987 401.564 33.0973 403.163 32.2076C402.985 32.3855 402.985 32.5635 402.807 32.7414C401.919 33.987 402.275 35.9444 403.34 37.012C404.228 37.9018 405.294 38.7915 406.537 39.3253C407.247 39.5032 407.957 39.5032 408.668 39.5032C409.733 39.5032 410.621 39.1474 411.687 38.7915C412.397 38.6135 413.107 38.2576 413.64 37.9018C414.35 37.5459 415.238 37.3679 415.949 37.012C417.725 36.3003 419.323 35.4106 421.099 34.3429C423.585 32.9194 426.071 31.3179 428.557 29.7164C428.38 30.2502 428.38 30.7841 428.38 31.3179C428.38 31.8517 428.557 32.5635 428.735 33.0973C428.912 33.4532 428.912 33.6311 429.09 33.987C429.268 34.3429 429.623 34.6988 429.8 35.0547C430.333 35.5885 431.221 35.9444 431.931 36.1223C432.286 36.1223 432.642 36.1223 432.819 36.3003C433.174 36.3003 433.707 36.3003 434.062 36.3003C434.95 36.1223 435.661 36.1223 436.371 35.7664C439.212 35.0547 442.054 33.6311 444.717 32.2076C447.736 30.6061 450.755 28.8267 453.597 27.0473C455.728 25.8017 457.681 24.3781 459.812 23.1325C459.99 22.9546 460.167 22.9546 460.345 22.7766C460.345 22.9546 460.167 23.1325 460.167 23.1325C459.102 24.912 459.812 27.4032 461.588 28.4708C462.476 29.0046 463.541 29.1826 464.607 28.8267C465.495 28.6488 466.56 27.937 466.916 27.0473C467.626 25.2678 468.336 23.6664 469.047 21.8869C469.402 21.1752 469.579 20.2854 469.935 19.5737C470.112 19.0399 470.29 18.684 470.467 18.1501C470.822 17.0825 471 15.8369 471 14.5913C471 13.7016 470.645 12.8119 470.112 12.278C469.224 11.3883 467.981 11.0324 466.916 11.3883C465.85 11.7442 464.785 12.1001 463.897 12.456C463.009 12.8119 462.298 13.5236 461.41 14.0575C460.522 14.5913 459.812 15.1251 458.924 15.481C457.681 16.3707 456.26 17.0825 455.017 17.9722C453.241 19.0399 451.466 20.1075 449.867 21.1752C447.914 22.4208 445.961 23.4884 443.83 24.734C442.764 25.2678 441.876 25.8017 440.811 26.3355C440.278 26.6914 439.745 26.8693 439.212 27.2252C440.633 25.4458 442.231 23.6664 443.652 21.8869C445.961 19.2178 448.269 16.7266 450.4 14.0575C450.755 13.7016 451.111 13.1677 451.288 12.6339C451.466 11.7442 451.466 10.8545 450.933 10.1427C450.578 9.43095 449.69 8.89713 448.979 8.54124C448.269 8.3633 447.026 8.3633 446.493 8.89713C442.942 11.5663 439.212 14.2354 435.661 16.7266C433.53 18.3281 431.221 19.7516 429.09 21.3531C426.426 23.1325 423.762 24.912 420.921 26.6914C419.145 27.759 417.369 28.8267 415.594 29.7164C416.304 29.1826 416.837 28.4708 417.547 27.937C418.968 26.5134 420.388 25.2678 421.809 24.0222C425.183 20.9972 428.38 17.7943 431.754 14.9472C431.931 14.7692 432.109 14.5913 432.286 14.4133C433.53 13.1677 433.53 11.0324 432.286 9.78684C431.754 9.25301 430.866 8.89713 429.978 8.89713C429.09 8.89713 428.38 9.25301 427.669 9.78684C427.492 9.96478 427.314 10.1427 427.137 10.3207C425.361 11.5663 423.407 12.8119 421.631 13.8795C420.211 14.7692 418.612 15.8369 417.192 16.7266C413.995 18.684 410.976 20.6413 407.78 22.5987C406.892 23.1325 405.826 23.6664 404.938 24.2002C402.63 25.4458 400.499 26.8693 398.19 28.1149C396.414 29.1826 394.638 30.2502 392.685 31.1399C390.376 32.3855 388.068 33.6311 385.759 34.6988C384.694 35.2326 383.628 35.5885 382.74 36.1223C382.03 36.4782 381.142 36.8341 380.432 37.19C381.32 36.1223 382.207 35.0547 383.273 33.987C384.339 32.7414 385.404 31.4958 386.47 30.2502C388.068 28.4708 389.666 26.8693 391.087 25.0899C392.33 23.8443 393.573 22.4208 394.816 21.1752C395.704 20.1075 396.592 19.0399 397.48 17.9722C398.19 17.0825 398.901 16.0148 399.611 14.9472C400.144 14.0575 400.144 12.8119 399.611 11.9221C399.256 11.3883 398.901 11.0324 398.545 10.8545C397.835 10.4986 396.947 10.3207 396.237 10.4986C395.704 10.6766 395.171 10.8545 394.816 11.0324C394.106 11.3883 393.573 11.7442 392.863 12.1001C392.152 12.6339 391.442 13.1677 390.732 13.5236C389.489 14.4133 388.423 15.1251 387.18 16.0148C385.404 17.2604 383.451 18.506 381.675 19.7516C379.544 21.1752 377.235 22.5987 375.104 24.0222C373.861 24.734 372.796 25.4458 371.552 26.1576C371.375 26.1576 371.375 26.3355 371.197 26.3355C372.618 24.912 373.861 23.4884 375.282 22.0649C376.525 20.6413 377.945 19.2178 379.189 17.7943C380.254 16.7266 381.142 15.6589 382.208 14.5913C383.273 13.3457 384.339 12.1001 385.582 10.8545C385.937 10.4986 386.292 9.96478 386.47 9.43095C386.647 8.54124 386.647 7.65153 386.114 6.93976C385.404 5.69416 383.806 4.98239 382.385 5.51622C381.852 5.69416 381.142 5.8721 380.609 6.22799C379.721 6.76182 378.833 7.29564 378.123 7.82947C377.59 8.18536 376.88 8.54124 376.347 8.89713C375.104 9.6089 373.861 10.4986 372.618 11.2104C370.309 12.6339 368.001 14.2354 365.692 15.6589C362.851 17.4384 359.832 19.2178 356.99 20.9972C354.682 22.4208 352.373 23.6664 350.065 25.0899C348.289 26.1576 346.513 27.0473 344.559 27.937C343.849 28.2929 343.139 28.6487 342.251 29.1826C342.784 28.6487 343.139 28.1149 343.672 27.5811C344.382 26.6914 345.27 25.8017 345.98 24.912C347.046 23.6664 348.111 22.4208 349.177 21.1752C350.775 19.2178 352.373 17.4384 353.971 15.481C354.682 14.5913 355.392 13.7016 356.28 12.9898C357.168 12.1001 357.878 11.2104 358.589 10.1427C359.299 9.25301 359.654 8.18536 360.009 7.1177C360.187 6.05005 360.009 4.80445 359.121 4.09268C358.234 3.20297 356.458 2.84708 355.392 3.55885C347.934 8.18536 340.475 12.9898 332.839 17.6163C331.596 18.506 330.175 19.2178 328.932 19.9296C326.801 21.1752 324.848 22.2428 322.717 23.4884C316.856 26.8693 310.996 30.0723 304.958 32.7414C306.024 31.8517 306.911 30.962 307.977 30.2502C310.818 27.759 313.66 25.4458 316.501 23.1325C319.875 20.2854 323.249 17.4384 326.623 14.5913C328.222 13.1677 329.82 11.7442 331.596 10.4986C332.661 9.6089 333.727 8.71918 334.792 7.82947C335.858 7.1177 336.923 6.05005 337.989 5.16033C339.054 4.27062 339.054 2.66914 338.522 1.60148C338.166 0.889713 337.456 0.355885 336.746 0.177943C335.858 0 335.503 0 335.325 0C334.792 0 334.26 0.177943 333.904 0.355885C332.484 1.42354 331.241 2.31325 329.82 3.38091C329.287 3.91474 328.754 4.27062 328.222 4.80445C326.623 5.8721 325.025 6.93976 323.249 8.00741C321.296 9.25301 319.342 10.4986 317.389 11.9221C313.127 14.7692 308.687 17.4384 304.425 20.2854C303.005 21.1752 301.584 22.0649 300.163 22.9546C297.677 24.3781 295.191 25.8017 292.882 27.2252C290.218 28.8267 287.732 30.2502 285.068 31.8517C283.825 32.5635 282.582 33.2753 281.339 33.987C278.143 35.7664 275.124 37.3679 271.75 38.7915C270.507 39.3253 269.086 39.6812 267.843 40.215L268.02 40.0371C268.553 39.5032 269.086 38.9694 269.619 38.4356C270.862 37.19 271.927 35.9444 273.17 34.6988C275.656 32.2076 278.143 29.8943 280.629 27.4032C282.937 25.0899 285.246 22.9546 287.555 20.8193C288.62 19.9296 289.508 18.8619 290.574 17.9722C292.172 16.5487 293.77 14.9472 295.191 13.5236C295.901 12.8119 296.611 12.1001 297.144 11.2104C297.855 10.3207 298.387 9.43095 298.92 8.54124C300.163 6.76182 298.21 4.09268 296.079 4.80445C294.48 5.33828 293.06 5.8721 291.462 6.58387C290.396 7.1177 289.331 7.82947 288.265 8.3633C286.667 9.25301 285.068 10.1427 283.293 11.0324C280.806 12.278 278.498 13.5236 276.012 14.9472C273.881 16.0148 271.75 17.2604 269.441 18.3281C265.357 20.4634 261.272 22.5987 257.188 24.3781C256.3 24.734 255.412 25.0899 254.346 25.4458C254.524 25.0899 254.879 24.734 255.057 24.3781C256.122 22.9546 257.365 21.531 258.431 20.1075C259.674 18.684 260.739 17.2604 261.982 15.6589C262.693 14.7692 263.403 13.8795 264.113 12.8119C264.824 12.1001 265.357 11.2104 265.889 10.3207C266.777 9.25301 267.31 8.00741 267.843 6.76182C268.375 5.8721 268.375 4.80445 267.843 3.91474C267.31 2.84708 265.889 2.13531 264.646 2.66914C263.758 3.02502 262.87 3.38091 261.982 3.91474C261.272 4.27062 260.739 4.80445 260.029 5.33828C259.319 5.8721 258.431 6.40593 257.72 6.93976C256.3 8.00741 254.879 8.89713 253.458 9.78684C250.439 11.9222 247.598 13.8795 244.579 15.8369C241.56 17.7943 238.541 19.7516 235.522 21.709C232.681 23.4884 229.662 25.2678 226.821 27.0473C224.867 28.1149 222.914 29.1826 220.96 30.2502C219.007 31.3179 216.876 32.5635 214.922 33.4532C214.745 33.4532 214.745 33.4532 214.567 33.6311C214.922 33.0973 215.455 32.5635 215.81 32.0297C216.876 30.7841 217.764 29.3605 218.829 28.1149C220.428 26.1576 222.026 24.2002 223.446 22.2428C224.69 20.6413 226.11 19.0399 227.353 17.2604C228.419 16.0148 229.307 14.7692 230.372 13.3457C231.793 11.5663 233.214 9.6089 234.457 7.65153C234.989 6.93976 234.989 6.05005 234.812 5.16033C234.634 4.44856 234.102 3.55885 233.391 3.20297C232.858 3.02502 232.503 2.84708 231.971 2.66914C230.905 2.4912 230.017 2.66914 229.129 3.20297C227.886 3.91474 226.998 4.80445 225.933 5.69416C221.671 8.71918 217.409 11.7442 213.146 14.7692C210.483 16.5487 207.819 18.3281 205.155 20.1075C201.781 22.4208 198.229 24.5561 194.678 26.6914C193.435 27.4032 192.191 28.1149 190.948 28.8267C191.659 28.1149 192.369 27.4032 193.079 26.5134C194.678 24.734 196.276 23.1325 198.052 21.3531C199.117 20.2854 200.183 19.2178 201.071 18.1501C201.959 17.2604 202.847 16.1928 203.734 15.1251C204.445 14.2354 204.978 13.1677 205.688 12.278C206.398 11.0324 206.221 9.25301 205.155 8.18536C204.8 7.82947 204.267 7.47359 203.734 7.29564C203.024 7.1177 201.781 7.1177 201.248 7.65153C199.117 9.25301 196.986 10.8545 195.033 12.456C193.257 13.8795 191.304 15.3031 189.35 16.7266C187.752 17.7943 186.331 19.0399 184.733 20.1075C184.023 20.6413 183.312 21.1752 182.602 21.709C179.761 23.6664 176.919 25.6237 174.078 27.4032C172.124 28.6487 170.171 29.8943 168.04 31.1399C166.619 32.0297 165.021 32.9194 163.6 33.6311C164.488 32.5635 165.376 31.4958 166.442 30.4282C168.217 28.2929 170.171 26.3355 172.124 24.2002C173.723 22.4208 175.498 20.6413 177.097 18.8619C177.985 17.7943 179.05 16.9045 179.938 15.8369C181.892 13.7016 184.2 12.1001 185.798 9.6089C186.509 8.3633 186.331 6.76182 185.266 5.69416C184.2 4.62651 182.602 4.44856 181.359 5.16033C176.564 8.3633 171.592 11.3883 166.797 14.4133C164.311 16.0148 161.824 17.4384 159.338 19.0399C156.497 20.8193 153.833 22.4208 150.992 24.0222C149.393 24.912 147.973 25.6237 146.375 26.5134C144.776 27.4032 143.178 28.1149 141.402 28.8267C140.692 29.1826 139.981 29.3605 139.271 29.5385C138.383 29.8943 137.318 30.0723 136.43 30.2502C136.252 30.2502 136.252 30.2502 136.075 30.2502C136.607 29.7164 136.963 29.1826 137.495 28.6487C138.206 27.759 138.916 26.8693 139.804 25.9796C140.869 24.734 141.935 23.4884 142.823 22.2428C144.243 20.4634 145.664 18.8619 147.085 17.0825C148.328 15.481 149.749 14.0575 151.169 12.456C152.057 11.3883 152.945 10.3207 153.833 9.07507C154.543 8.00741 155.254 6.93976 155.964 5.8721C156.852 4.62651 156.497 2.84708 155.431 1.95737C154.366 0.889713 152.768 0.71177 151.524 1.42354C150.637 1.95737 149.749 2.4912 148.861 3.02502C148.328 4.62651 147.262 5.33828 146.197 6.22799C145.309 6.93976 144.421 7.47359 143.533 8.18536C141.58 9.6089 139.449 11.0324 137.495 12.6339C134.299 14.9472 131.102 17.2604 127.728 19.5737C124.887 21.531 121.868 23.4884 119.026 25.4458C117.073 26.6914 115.297 27.937 113.344 29.1826C112.278 29.8943 111.213 30.4282 110.325 31.1399C109.614 31.6738 108.726 32.0297 108.016 32.5635C112.989 26.3355 118.138 20.2854 123.288 14.2354C123.821 13.5236 124.176 12.8119 124.176 11.9221C124.176 11.2104 123.821 10.3207 123.288 9.78684C122.045 8.54124 120.27 8.71918 119.026 9.78684C117.961 10.6766 117.073 11.7442 116.007 12.456C115.475 12.9898 114.764 13.3457 114.232 13.8795C113.166 14.7692 112.278 15.481 111.213 16.3707C108.904 18.1501 106.773 19.9296 104.464 21.8869C101.623 24.0222 98.7817 26.1576 95.9403 28.2929C93.6317 30.0723 91.3231 31.6738 88.8369 33.2753C86.8835 34.5209 84.9301 35.5885 82.9766 36.8341C81.0232 38.0797 79.0698 39.1474 76.9387 40.0371C78.0042 38.6135 79.2473 37.012 80.3129 35.5885C82.6215 32.5635 85.1077 29.7164 87.4163 26.6914C89.1921 24.5561 91.1455 22.4208 92.9214 20.2854C93.8093 19.2178 94.8748 18.1501 95.7628 17.0825C96.2955 16.3707 97.0059 15.6589 97.7162 15.1251C97.8938 14.9472 98.2489 14.7692 98.4265 14.5913C99.1369 14.0575 99.6696 13.5236 100.38 12.9898C101.09 12.456 101.623 11.7442 102.156 11.2104C102.511 10.8545 102.866 10.3207 102.866 9.78684C103.044 9.07507 103.044 8.18536 102.511 7.47359C102.156 6.76182 101.445 6.22799 100.735 6.05005C100.025 5.8721 98.9593 5.8721 98.4265 6.40593C97.8938 6.93976 97.1834 7.29564 96.6507 7.65153C95.7628 8.3633 95.0524 8.89713 94.3421 9.6089C93.8093 10.1427 93.2766 10.6766 92.7438 11.3883C91.6783 12.278 90.6128 12.9898 89.7249 13.8795C87.5938 15.481 85.4628 17.0825 83.3318 18.684C81.556 19.9296 79.7801 21.1752 78.0042 22.4208C75.6956 24.0222 73.5646 25.6237 71.256 27.0473C68.4147 29.0046 65.5733 30.7841 62.5543 32.5635C61.1337 33.4532 59.713 34.165 58.1147 35.0547C56.5165 35.7665 55.0958 36.6562 53.4975 37.3679C52.6096 37.7238 51.7217 37.9018 51.0113 38.2576C51.1889 38.0797 51.3665 37.9018 51.3665 37.5459C52.6096 35.9444 53.6751 34.5209 54.9182 32.9194C55.8061 31.6738 56.694 30.4282 57.7595 29.1826C59.713 26.6914 61.4888 24.3781 63.4423 21.8869C64.6854 20.2854 66.106 18.506 67.3491 16.9045C68.0595 16.0148 68.7698 15.1251 69.4802 14.2354C70.5457 12.8119 71.6112 11.3883 72.4991 9.78684C73.2095 8.71918 72.8543 7.1177 71.9664 6.22799C71.0784 5.33828 69.4802 4.98239 68.4146 5.69416C67.3491 6.40593 66.4612 6.93976 65.5733 7.82947C65.0405 8.3633 64.5078 8.71918 63.7974 9.25301C62.9095 9.96478 61.844 10.8545 60.9561 11.5663C58.8251 13.1677 56.694 14.9472 54.563 16.5487C51.8992 18.506 49.413 20.4634 46.7493 22.4208C44.6183 24.0222 42.3096 25.6237 40.1786 27.2252C39.4683 27.759 38.5804 28.2929 37.87 28.8267C38.5804 27.937 39.2907 27.0473 39.8235 26.1576C41.0666 24.3781 42.4872 22.5987 43.7303 20.8193C44.4407 19.7516 45.3286 18.684 46.0389 17.6163C46.9269 16.5487 47.6372 15.3031 48.3475 14.0575C49.2355 12.6339 49.7682 11.0324 50.301 9.6089C50.4786 9.07507 50.4786 8.54124 50.301 7.82947C50.1234 7.29564 49.9458 6.76182 49.413 6.40593C48.3475 5.33828 46.7493 5.16033 45.5062 5.8721C44.6183 6.40593 43.5527 6.93976 42.6648 7.65153C41.5993 8.54124 40.5338 9.43095 39.4683 10.3207C38.5804 11.0324 37.87 11.7442 36.9821 12.456C35.5614 13.5236 34.3183 14.7692 32.8976 15.8369C28.1028 19.7516 23.4856 23.8443 18.6908 27.5811C17.0926 28.8267 15.6719 29.8943 14.0736 31.1399C13.3633 31.6738 12.6529 32.2076 11.765 32.7414C12.4754 31.6738 13.0081 30.6061 13.7184 29.5385C14.9615 27.4032 16.2046 25.2678 17.6253 23.1325C18.8684 21.1752 19.9339 19.2178 21.177 17.2604C21.8874 16.1928 22.4201 15.1251 23.1305 13.8795C23.8408 12.6339 24.7287 11.5663 25.2615 10.1427C25.4391 9.43095 25.7942 8.71918 25.7942 8.00741C25.7942 7.47359 25.6166 6.93976 25.6166 6.40593C25.4391 5.51622 24.5511 4.62651 23.6632 4.44856C22.7753 4.27062 21.5322 4.44856 20.8219 5.16033C18.1581 8.18536 15.4943 11.3883 12.8305 14.4133C12.8305 13.7016 12.4754 13.7016 12.2978 13.7016C11.5874 13.7016 10.6995 14.0575 10.3443 14.5913C8.74607 16.5487 7.1478 18.3281 5.72712 20.2854C3.95127 22.5987 2.17542 25.0899 0.399566 27.4032C-0.133189 28.1149 -0.133189 29.5385 0.399566 30.2502C0.932322 31.1399 1.82025 31.6738 2.88576 31.6738C3.24093 31.6738 3.77368 31.6738 4.12885 31.4958C4.66161 31.3179 5.19436 31.1399 5.54953 30.962C5.01678 31.8517 4.30644 32.5635 3.95127 33.6311C3.5961 34.3429 3.41851 35.0547 3.24093 35.7664C3.06334 36.6562 3.06334 37.5459 3.06334 38.2576C3.06334 40.393 5.19436 41.9944 7.32539 41.4606C8.92365 40.9268 10.5219 40.5709 12.1202 39.8591C13.3633 39.5032 14.6064 38.6135 16.0271 37.7238Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_337_528">
          <rect width="470" height="48" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export const PartnershipLeftIcon = () => {
  return (
    <svg
      width="228"
      height="187"
      viewBox="0 0 228 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-[86px] lg:w-auto h-auto rotate-90 lg:rotate-0 -right-2 lg:left-0 top-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H152V59.0625H228V122.812H152V186.562H0V122.812H76V63.75H0V0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const PartnerSixStrokes = () => {
  return (
    <svg
      width="371"
      height="109"
      viewBox="0 0 371 109"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-14 left-1/2 -translate-x-1/2 w-[120%]"
    >
      <path
        d="M5 61.0312C14.0643 73.6618 22.3403 83.4362 34.7665 92.5487"
        stroke="currentColor"
        strokeWidth="8.82483"
        strokeLinecap="round"
      ></path>
      <path
        d="M22.5078 31.2656C28.6252 39.8591 35.0924 47.7679 41.7685 55.7792"
        stroke="currentColor"
        strokeWidth="8.82483"
        strokeLinecap="round"
      ></path>
      <path
        d="M57.5312 5C65.4595 20.5516 71.6876 36.2806 78.5429 52.2762"
        stroke="currentColor"
        strokeWidth="8.82483"
        strokeLinecap="round"
      ></path>
      <path
        d="M366.539 73.0312C357.475 85.6618 349.199 95.4362 336.773 104.549"
        stroke="currentColor"
        strokeWidth="8.82483"
        strokeLinecap="round"
      ></path>
      <path
        d="M349.031 43.2656C342.914 51.8591 336.447 59.7679 329.771 67.7792"
        stroke="currentColor"
        strokeWidth="8.82483"
        strokeLinecap="round"
      ></path>
      <path
        d="M314.008 17C306.08 32.5516 299.851 48.2806 292.996 64.2762"
        stroke="currentColor"
        strokeWidth="8.82483"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};
export const PartnershipRightIcon = () => {
  return (
    <svg
      width="228"
      height="187"
      viewBox="0 0 228 187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute w-[86px] lg:w-auto h-auto rotate-90 lg:rotate-0 -left-2 bottom-2 lg:right-0 lg:left-auto lg:bottom-0"
      data-sentry-element="svg"
      data-sentry-source-file="frames.tsx"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0.4375H152V59.5H228V123.25H152V187H0V123.25H76V64.1875H0V0.4375Z"
        fill="currentColor"
        data-sentry-element="path"
        data-sentry-source-file="frames.tsx"
      ></path>
    </svg>
  );
};

export const SponsorUnderStrokes = () => {
  return (
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
  );
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
