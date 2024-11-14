"use client";
import { Box } from "@mui/material";
import {
  AboutUsImageWithTransition,
  AgoraBox,
  AgoraTransitionBox,
  AgoraTransitionNoTransformBox,
  HomeButton
} from "@/app/(home)/components/newHome/utils";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

export const AboutUs = () => {
  return (
    <Box>
      <section>
        <AgoraTransitionBox>
          <Box className={"mx-[30px] flex relative"}>
            <Box className={"min-h-[1px] relative flex w-full"}>
              <Box className={'flex py-0 flex-wrap content-start relative w-full'}>
                <Box className={"relative w-full mb-0 h-[50px]"}>
                  <AgoraTransitionBox className={'h-[50px]'}>
                    <Box className={"h-[120px]"}></Box>
                  </AgoraTransitionBox>
                </Box>
                <Box
                  className={
                    "absolute bottom-0 translate-x-0 translate-y-0 rotate-0 scale-100 z-[1] origin-center left-[-4vw] w-[15vw] max-w-[15vw]"
                  }
                >
                  <AgoraTransitionBox>
                    <Image
                      className={
                        "align-middle inline-block h-auto shadow-none border-none max-w-full"
                      }
                      height={369}
                      width={301}
                      src={"/images/aboutUsTopImage.svg"}
                      alt={"top right vector image"}
                    />
                  </AgoraTransitionBox>
                </Box>
              </Box>
            </Box>
          </Box>
        </AgoraTransitionBox>
      </section>
      <section>
        <AgoraTransitionNoTransformBox className={""}>
          <Box className={"md:mx-[15px] flex flex-wrap relative"}>
            <Box className={"w-full md:w-[54%] lg:w-[55%] md:!ml-[-15px] lg:z-[2] relative flex"}>
                <AboutUsImageWithTransition className={'w-full items-center content-center'}>
                  <Box className={"h-[250px] w-full relative"}>
                    <AgoraTransitionBox>
                      <Box className={"h-[250px] w-full relative"}></Box>
                    </AgoraTransitionBox>
                  </Box>
                </AboutUsImageWithTransition>
            </Box>
            <Box className={"w-full md:w-[46%] lg:w-[45%] z-[2]"}>
              <Box
                className={
                  "content-center items-center py-0 flex flex-col w-full"
                }
              >
                <Box className={"h-[50px] md:h-[90px] w-full"}>
                  <AgoraTransitionBox>
                    <Box className={"h-[120px]"} />
                  </AgoraTransitionBox>
                </Box>
                <AgoraBox>
                  <Box className={"max-w-[1290px] flex mx-auto relative"}>
                    <Box className={"w-full"}>
                      <Box
                        className={
                          "2xl:w-[calc(1290px/2)] lg:w-[calc(1000px/2)] mx-auto md:pr-[30px] md:pl-[40px] lg:pr-[3%] lg:pl-[16.3%] items-center flex-wrap content-start"
                        }
                      >
                        <Box className={"w-full mb-0"}>
                          <AgoraTransitionBox>
                            <Box className={"relative"}>
                              <span
                                className={
                                  "mb-[1em] leading-[18px] text-[14px] uppercase text-[#FD4C19] font-semibold"
                                }
                                style={{ letterSpacing: "1.8px" }}
                              >
                                About Us
                              </span>
                              <h1
                                className={
                                  "ml-[-1px] text-[27px] md:text-[44px] lg:text-[3em] font-extrabold text-[#FD4C19]"
                                }
                                style={{lineHeight: '1em', letterSpacing: 0}}
                              >
                                <span className={"leading-[1em]"}>
                                  Savor the products at our food festival
                                </span>
                              </h1>
                              <Box className={"mt-[1.7em]"}>
                                <p className={"m-0 text-black"}>
                                  Dicta sunt explicabo. Nemo enim ipsam
                                  voluptatem quia voluptas sit aspernatur aut
                                  odit aut fugit.
                                </p>
                              </Box>
                            </Box>
                          </AgoraTransitionBox>
                        </Box>
                        <Box className={"h-[28px]"}>
                          <AgoraTransitionBox>
                            <Box className={"h-[28px]"} />
                          </AgoraTransitionBox>
                        </Box>
                        <Box className={"w-full mb-0"}>
                          <AgoraTransitionBox className={"mb-0"}>
                            <ul className={"pl-[30px] text-[#FD4C19]"}>
                              <li
                                className={"mt-0 mb-[10px] text-[16px] relative flex items-center"}
                              >
                                <CheckIcon className={'absolute !h-full'} style={{ fontSize: "11px", width: "11px", left: "-30px" }} />
                                Sed ut perspiciatis unde omnis
                              </li>
                              <li
                                className={"my-[10px] text-[16px]  relative flex"}
                              >
                                <CheckIcon className={'absolute !h-full'} style={{ fontSize: "11px", width: "11px", left: "-30px" }} />
                                Sed ut perspiciatis unde omnis
                              </li>
                              <li
                                className={"mb-0 text-[16px] mt-[10px] relative flex"}
                              >
                                <CheckIcon className={'absolute !h-full'} style={{ fontSize: "11px", width: "11px", left: "-30px" }} />
                                Sed ut perspiciatis unde omnis
                              </li>
                            </ul>
                          </AgoraTransitionBox>
                        </Box>
                        <Box className={"h-[38px]"}>
                          <AgoraTransitionBox>
                            <Box className={"h-[38px]"} />
                          </AgoraTransitionBox>
                        </Box>
                        <Box className={"w-full relative"}>
                          <AgoraTransitionBox>
                            <Box
                              className={
                                "inline-block align-top mb-[-10px] leading-0"
                              }
                            >
                              <HomeButton style={{ letterSpacing: "1.5px", padding: '' }} className={'bg-[#FE9E11] text-white lg:!py-[18px] lg:!px-[40px] !py-[15px] !px-[36px]'}>
                                About Us
                              </HomeButton>
                            </Box>
                          </AgoraTransitionBox>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </AgoraBox>
                  `<Box className={"h-[50px] md:h-[90px] w-full"}>
                    <AgoraTransitionBox>
                      <Box className={"h-[120px]"} />
                    </AgoraTransitionBox>
                  </Box>`
              </Box>
            </Box>
          </Box>
        </AgoraTransitionNoTransformBox>
      </section>
      <section>
        <AgoraTransitionBox>
          <Box className={"flex relative"}>
            <Box className={"min-h-[1px] mx-auto relative flex w-full"}>
              <Box className={'flex py-0 flex-wrap content-start relative w-full'}>
                <Box className={"relative w-full mb-0 h-[50px]"}>
                  <AgoraTransitionBox className={'h-[50px]'}>
                    <Box className={"h-[120px]"}></Box>
                  </AgoraTransitionBox>
                </Box>
                <Box
                  className={
                    "absolute bottom-[-2vw] translate-x-0 translate-y-0 rotate-0 scale-100 z-[1] origin-center right-[0vw] w-[10vw] max-w-[10vw]"
                  }
                >
                  <AgoraTransitionBox>
                    <Image
                      className={
                        "align-middle inline-block h-auto shadow-none border-none max-w-full"
                      }
                      height={397}
                      width={204}
                      src={"/images/aboutUsBottomImage.svg"}
                      alt={"top right vector image"}
                    />
                  </AgoraTransitionBox>
                </Box>
              </Box>
            </Box>
          </Box>
        </AgoraTransitionBox>
      </section>
    </Box>
  );
};
