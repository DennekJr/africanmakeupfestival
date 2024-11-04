'use client'
import Box from "@mui/material/Box";
import Image from "next/image";
import { FortyFiveDegreeArrow } from "../Hero/utils";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    try {
      fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: 'hello',
      }).then((data) => {
        const res = data.json();
        return res;
      }).then((data) => {
        console.log('data from api', data);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);
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
        <Box className="grid gap-6">
          <Box>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
            >
              <span className="relative max-w-full break-words">
                Journalists c
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
                all #ASF home to their next big headline.
              </span>
            </pre>
          </Box>
          <Box>
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal text-[#E6E6E6]"
            >
              <span className="relative max-w-full break-words">
                This November, leading journalists from the world&apos;s most
                influential publications will join forces with trailblazing
                innovators and companies shaping the future of tech. Will you be
                among them?
              </span>
            </pre>
          </Box>
        </Box>
        <Box className="flex gap-4">
          <a
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#F4F4F5] text-[#18181B] hover:bg-secondary/80 h-14 px-6 py-4 rounded-full w-full md:w-auto"
            href="/ticket"
          >
            <span className={"capitalize"}>Apply for Media Accreditation</span>
            <FortyFiveDegreeArrow />
          </a>
        </Box>
      </Box>
      <Box className={"col-span-1 relative"}>
        <Image
          src={"/images/mediaHero.webp"}
          alt={"2024 speaker"}
          className={
            "object-cover object-center h-full w-full min-h-[545px] max-h-[545px] lg:max-h-full"
          }
          width="2208"
          height="2028"
          decoding="async"
          style={{ color: "transparent" }}
        />
      </Box>
    </section>
  );
};
