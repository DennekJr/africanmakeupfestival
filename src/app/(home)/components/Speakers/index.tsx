"use client";
import Box from "@mui/material/Box";
import {
  SpeakersImgScribble,
  TransparentArrowButton,
  WhiteBgArrowButton,
  WhiteBGButton,
} from "@/app/utils";

export const Speakers = () => {
  return (
    <section
      className={
        "bg-[#0A090B] w-full lg:my-24 py-24 bg-[url(https://www.africastartupfestival.com/grid-section.svg)] bg-repeat-y bg-top text-white flex flex-col items-center [&>a]:max-w-[90%]"
      }
    >
      <Box className={"w-full"}>
        <Box
          className={
            "w-full max-w-[1320px] mx-auto space-y-10 xl:space-y-16 p-6"
          }
        >
          <Box className="flex flex-col justify-between gap-4">
            <pre
              id="undefined-0"
              className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
              data-sentry-element="Comp"
              data-sentry-component="Children"
              data-sentry-source-file="render.tsx"
            >
              <span className="relative max-w-full break-words">
                2024 Speakers
                <svg
                  width="317"
                  height="34"
                  viewBox="0 0 317 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-w-full lg:-bottom-8 absolute -bottom-5 left-0"
                >
                  <path
                    d="M6.87774 17.089C9.35967 17.089 11.9598 16.911 14.4417 16.733C15.5054 16.733 16.4509 16.555 17.5146 16.555C22.0057 16.199 26.4968 15.8429 30.9879 15.4869C36.4244 15.1309 41.7429 14.5969 47.1795 14.2408C54.8616 13.5288 62.5437 12.9948 70.2259 12.2827C71.9987 12.1047 73.7715 12.1047 75.5443 11.9267C80.0354 11.5707 84.5265 11.2147 89.0176 11.0366C93.5087 10.6806 97.9998 10.3246 102.491 10.1466C104.264 9.96859 106.036 9.79058 107.809 9.79058C114.9 9.43455 122.11 9.07853 129.201 8.72251C133.574 8.5445 137.947 8.36649 142.438 8.01047C144.211 8.01047 145.865 7.83246 147.638 7.83246C154.493 7.65445 161.466 7.47644 168.321 7.29843C175.176 7.12042 181.912 6.94241 188.767 6.7644C190.54 6.7644 192.313 6.7644 194.204 6.7644C198.695 6.7644 203.068 6.7644 207.559 6.7644C214.532 6.7644 221.387 6.7644 228.36 6.58639C230.605 6.58639 232.851 6.58639 235.096 6.58639C239.824 6.58639 244.551 6.58639 249.279 6.58639C249.633 6.58639 250.106 6.58639 250.461 6.58639C239.824 6.7644 229.069 6.94241 218.432 7.29843C213.941 7.47644 209.568 7.47644 205.077 7.65445C203.186 7.65445 201.177 7.65445 199.286 7.83246C192.786 8.01047 186.404 8.36649 179.903 8.5445C172.457 8.90052 165.012 9.07853 157.566 9.43455C156.266 9.43455 155.084 9.61256 153.784 9.61256C149.766 9.96859 145.865 10.1466 141.847 10.5026C133.81 11.0366 125.774 11.5707 117.737 12.1047C116.555 12.1047 115.373 12.2827 114.191 12.4607C110.291 12.8168 106.273 13.3508 102.373 13.7068C95.2815 14.4188 88.3085 15.1309 81.2173 15.8429C79.3263 16.0209 77.3171 16.377 75.4261 16.555C70.935 17.089 66.4439 17.623 61.9528 18.3351C56.2798 19.0471 50.4887 19.7592 44.8157 20.4712C36.8972 21.5393 28.8605 22.6073 20.942 23.6754C19.051 23.8534 17.16 24.2094 15.1508 24.3874C11.7234 24.9215 8.29598 25.4555 4.86857 25.9895C4.51401 25.9895 4.15945 26.3455 4.15945 27.0576C4.15945 27.5916 4.51401 28.1257 4.86857 28.1257C6.16862 28.1257 7.35049 28.3037 8.65055 28.3037C8.41417 29.1937 8.29598 29.7277 8.29598 30.2618C8.29598 32.2199 9.35967 34 10.7779 34C20.5874 33.1099 30.2787 32.0419 40.0882 31.3298C48.5977 30.7958 57.1071 30.0838 65.6166 29.5497C74.9534 28.8377 84.4083 28.1257 93.7451 27.5916C96.6997 27.4136 99.6544 27.2356 102.609 26.8796C103.436 26.8796 104.264 26.7016 105.209 26.7016C120.337 26.1675 135.465 25.4555 150.593 24.9215C158.63 24.5654 166.785 24.2094 174.821 24.0314C177.776 23.8534 180.612 23.8534 183.567 23.6754C199.05 23.3194 214.532 22.9634 230.014 22.6073C236.633 22.4293 243.251 22.2513 249.87 22.0733C255.543 21.8953 261.216 21.8953 266.889 21.5393C271.616 21.3613 276.226 21.0052 280.953 20.8272C283.317 20.6492 285.68 20.6492 287.926 20.4712C293.244 19.9372 298.563 19.4031 303.881 18.8691C303.527 19.5812 303.527 20.6492 303.645 21.3613C303.763 22.2513 304.118 22.9633 304.709 23.3194C305.181 23.6754 305.89 24.0314 306.363 23.6754C307.545 22.9634 308.727 22.2513 309.791 21.5393C309.791 21.5393 309.791 21.5393 309.672 21.5393C309.791 21.5393 309.791 21.3613 309.909 21.3613C310.027 21.3613 310.145 21.1832 310.145 21.1832H310.027C310.618 20.8272 311.209 20.4712 311.918 19.9372C312.509 19.5812 313.218 19.0471 313.809 18.6911C314.518 18.1571 315.109 17.623 315.818 17.089C316.527 16.555 317 15.1309 317 13.8848C317 13.1728 316.882 12.6387 316.645 11.9267C316.409 11.2147 315.818 10.3246 315.227 10.1466C314.636 9.96859 314.045 9.79058 313.454 9.79058C313.336 9.79058 313.218 9.79058 313.1 9.79058C312.745 9.79058 312.272 9.79058 311.918 9.96859C310.972 10.1466 310.145 10.3246 309.2 10.3246C308.491 10.3246 307.781 10.5026 306.954 10.5026C304.945 10.6806 303.054 10.8586 301.045 11.2147C300.572 11.2147 299.981 11.3927 299.508 11.3927C299.745 11.0366 299.863 10.6806 299.863 10.3246C299.981 9.96859 299.981 9.61257 299.981 9.25654C299.981 9.07853 299.981 8.72251 300.099 8.5445C300.099 8.18848 300.099 7.83246 299.981 7.65445C299.981 7.65445 300.099 7.65445 300.099 7.47644C300.454 7.12042 300.808 6.7644 301.045 6.05236C301.281 5.51832 301.399 4.80628 301.399 4.09424C301.399 3.3822 301.281 2.84817 301.045 2.13613C300.927 1.95812 300.808 1.60209 300.69 1.42408C300.336 0.890052 299.981 0.712042 299.627 0.534031C298.917 0.17801 298.09 0 297.263 0C296.554 0 295.963 0 295.254 0C294.308 0 293.363 0 292.417 0C291.117 0 289.699 0 288.399 0C284.853 0 281.308 0 277.762 0C274.453 0 271.025 0 267.716 0C264.643 0 261.689 0 258.616 0C246.442 0 234.387 0.17801 222.214 0.356021C213.114 0.534031 204.013 0.712042 194.913 0.712042C190.895 0.712042 186.758 0.890052 182.74 1.06806C173.639 1.42408 164.539 1.60209 155.439 1.95812C152.838 1.95812 150.238 2.13613 147.638 2.13613C146.102 2.13613 144.684 2.31414 143.147 2.31414C134.165 2.84817 125.183 3.3822 116.201 3.91623C113.482 4.09424 110.764 4.27225 107.927 4.45026C106.391 4.45026 104.855 4.62827 103.318 4.80628C94.336 5.51832 85.472 6.23037 76.4898 6.94241C71.8805 7.29843 67.2712 7.65445 62.6619 8.18848C54.7434 8.90052 46.8249 9.61256 39.0246 10.5026C32.1697 11.2147 25.3149 11.7487 18.4601 12.2827C17.3964 12.4607 16.3327 12.4607 15.1508 12.6387C13.378 12.8168 11.6052 12.8168 9.83241 12.9948C8.29599 13.7068 6.64137 13.7068 5.10494 13.7068C4.98675 12.9948 4.51401 12.4607 4.15945 12.6387C3.09576 12.6387 2.15027 12.8168 1.08659 12.9948C0.61384 13.1728 0.141093 13.5288 0.0229064 14.2408C-0.0952805 15.1309 0.25928 16.0209 0.732027 16.199C1.20477 16.377 1.67752 16.555 2.15027 16.733C2.62302 16.911 2.97758 16.911 3.45032 16.911C4.63219 17.089 5.69587 17.089 6.87774 17.089ZM283.435 11.3927C284.853 11.3927 286.39 11.3927 287.808 11.3927C287.926 11.9267 288.162 12.2827 288.399 12.6387C287.808 12.6387 287.217 12.8168 286.744 12.8168C285.68 12.8168 284.617 12.9948 283.553 12.9948C278.826 13.1728 274.216 13.5288 269.489 13.7068C267.362 13.8848 265.234 14.0628 263.107 14.0628C259.798 14.0628 256.37 14.2408 253.061 14.2408C245.379 14.4188 237.815 14.5969 230.133 14.7749C215.241 15.1309 200.468 15.4869 185.576 15.8429C174.939 16.0209 164.303 16.555 153.666 17.089C137.711 17.801 121.637 18.3351 105.682 19.0471C102.491 19.2251 99.2998 19.4031 96.1088 19.7592C87.0084 20.4712 77.908 21.0052 68.8076 21.7173C59.9436 22.4293 50.9614 22.9634 42.0974 23.6754C41.2701 23.6754 40.4428 23.8534 39.6155 23.8534C41.9792 23.4974 44.4612 23.3194 46.8249 22.9633C55.2162 22.0733 63.6074 21.0052 71.9987 20.1152C74.9534 19.7592 77.908 19.4031 80.7445 19.0471C82.2809 18.8691 83.8174 18.6911 85.2356 18.6911C94.0996 17.9791 102.845 17.089 111.591 16.377C113.246 16.199 115.019 16.0209 116.673 15.8429C119.155 15.6649 121.637 15.4869 124.001 15.4869C132.983 14.9529 141.965 14.4188 150.947 13.8848C152.957 13.7068 154.966 13.7068 156.857 13.5288C157.33 13.5288 157.921 13.5288 158.393 13.5288C159.811 13.5288 161.23 13.5288 162.53 13.3508C171.512 12.9948 180.612 12.8168 189.595 12.4607C193.731 12.2827 197.868 12.1047 202.004 12.1047C215.359 11.9267 228.833 11.7487 242.188 11.5707C256.134 11.5707 269.843 11.3927 283.435 11.3927Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </pre>
          </Box>
          <Box className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 w-full">
            <Box className="grid gap-5">
              <img
                alt="Wills Stevens"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/will.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Will Stevens
                  </h3>
                </div>
                <div>
                  <p>Consul General</p>
                  <p>U.S. Consulate General Lagos</p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Oyin Solebo"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/oyin.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Oyin Solebo
                  </h3>
                </div>
                <div>
                  <p>Managing Director</p>
                  <p>Techstars Lagos</p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Somachi Chris-Asoluka 2"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/somachi.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Somachi Chris-Asoluka
                  </h3>
                </div>
                <div>
                  <p>Chief Executive Officer</p>
                  <p> The Tony Elumelu Foundation</p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Bernard Ghartey"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/bernard.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Bernard Ghartey
                  </h3>
                </div>
                <div>
                  <p>Investment Manager</p>
                  <p>Norrsken22</p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Satoshi Shinada"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/satoshi.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Satoshi Shinada
                  </h3>
                </div>
                <div>
                  <p>Partner</p>
                  <p>Verod Kepple Africa Ventures</p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Ore Ogunbiyi"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/ore.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Ore Ogunbiyi
                  </h3>
                </div>
                <div>
                  <p>Africa Correspondent </p>
                  <p>The Economist</p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Blessing Abeng"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/blessing.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Blessing Abeng
                  </h3>
                </div>
                <div>
                  <p>Branding and Communications Expert</p>
                  <p></p>
                </div>
              </div>
            </Box>
            <Box className="grid gap-5">
              <img
                alt="Ike Eze"
                fetchPriority="high"
                width="316"
                height="347"
                decoding="async"
                data-nimg="1"
                className="w-full rounded-sm aspect-[1/1.1] object-cover"
                style={{ color: "transparent" }}
                src="/images/ike.png"
              />
              <div className="grid gap-1.5 text-left">
                <div>
                  <h3 className="text-xl lg:text-4xl leading-none font-medium">
                    Ike Eze
                  </h3>
                </div>
                <div>
                  <p>Managing Partner</p>
                  <p>Beta Ventures</p>
                </div>
              </div>
            </Box>
          </Box>
          <Box className={""}>
            <TransparentArrowButton name={"See more speakers"} />
          </Box>
        </Box>
      </Box>
      <Box className={"w-full py-16 lg:py-24"}>
        <Box
          className={
            "max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-10 px-6 xl:px-0"
          }
        >
          <Box
            className={
              "col-span-1 flex flex-col justify-between gap-8 lg:gap-16"
            }
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
                  The Africa Startup Festival (#ASF) continues to be the
                  epicenter of unique startup and enterprise solutions,
                  showcasing the latest innovations and technologies. Our
                  exhibitions provide a platform for startups to demonstrate
                  their groundbreaking products and services, attracting key
                  investors, partners, and customers. This year, we`re featuring
                  even more exciting exhibits from diverse sectors, making #ASF
                  the ultimate destination for discovering cutting-edge
                  solutions.
                </span>
              </pre>
              <div className="flex flex-wrap gap-3">
                <WhiteBGButton>Apply to Exhibit</WhiteBGButton>
              </div>
            </div>
          </Box>
          <Box className={"col-span-1 relative"}>
            <SpeakersImgScribble />
            <img
              alt="ASF 2023 Highlight - Remita Rep"
              loading="lazy"
              width="640"
              height="858"
              decoding="async"
              className="object-cover max-h-[420px] lg:max-h-none h-full lg:h-[858px] w-[640px] rounded-lg"
              style={{ color: "transparent" }}
              src="/images/two-speakers.png"
            />
          </Box>
        </Box>
      </Box>
      <Box
        className={
          "grid gap-6 py-12 px-6 lg:px-0 lg:gap-12 lg:py-20 mx-auto max-w-[1320px] w-full"
        }
      >
        <div>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[23px] leading-[27.6px] lg:text-5xl lg:leading-[52.8px]"
          >
            <span className="relative max-w-full break-words">2023 </span>
            <span className="relative max-w-full break-words">Recap </span>
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
              allowFullScreen=""
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Africa Startup Festival 2023 Recap"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/Apt0flNCM2c?enablejsapi=1&amp;origin=https%3A%2F%2Fwww.africastartupfestival.com&amp;widgetid=1"
              id="widget2"
            ></iframe>
          </div>
        </div>
      </Box>
      <Box className={""}>
        <WhiteBgArrowButton name={"GET TICKET"} />
      </Box>
    </section>
  );
};
