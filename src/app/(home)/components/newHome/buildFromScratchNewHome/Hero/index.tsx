"use client";
import { Box } from "@mui/material";
import { ThreeDashSVG } from "@/app/(home)/components/newHome/buildFromScratchNewHome/utils";
import React from "react";
import { AgoraTransitionBox } from "@/app/(home)/components/newHome/utils";
import { ArrowRightAltOutlined } from "@mui/icons-material";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className={"relative"}>
      <Box className={"flex mx-auto relative"}>
        <Box className={"w-full relative flex min-h-[1px]"}>
          <Box className={"py-0 px-[30px] flex w-full flex-wrap content-start"}>
            <Box className={"w-full"}>
              <AgoraTransitionBox>
                <Box className={"box-border"}>
                  <aside className={"box-border"}>
                    <Box className={"box-border"}>
                      <Box className={"relative"}>
                        <Box
                          className={
                            "my-0 box-border max-w-none overflow-visible"
                          }
                        >
                          <Box
                            className={
                              "z-10 visible bg-transparent p-0 m-auto h-[840px] block w-[2177px] absolute overflow-visible transform translate-x-0 translate-y-0 top-0 left-0"
                            }
                          >
                            <Box
                              className={"h-[840px] max-h-[840px] w-[2177px]"}
                            >
                              <Box
                                className={
                                  "absolute z-[101] top-0 left-0 block w-full h-full pointer-events-none overflow-hidden"
                                }
                              />
                              <Box
                                className={
                                  "absolute z-[200] w-full h-full hidden"
                                }
                              >
                                <Box
                                  className={
                                    "block z-[20] box-border bg-clip-content absolute leading-0 w-full h-full"
                                  }
                                ></Box>
                              </Box>
                              <Box
                                className={
                                  "block z-[20] box-border bg-clip-content absolute leading-0 w-full h-full"
                                }
                              >
                                <Box
                                  className={
                                    "absolute block overflow-hidden h-full w-full z-[20] opacity-100 visible"
                                  }
                                >
                                  <Box
                                    className={
                                      "absolute top-0 left-0 z-0 w-full h-full block"
                                    }
                                  >
                                    <Box
                                      className={
                                        "absolute top-0 left-0 z-0 w-full h-full block"
                                      }
                                    ></Box>
                                  </Box>
                                  <Box
                                    className={
                                      "top-[200px] z-[6] w-full absolute"
                                    }
                                  >
                                    <Box
                                      className={
                                        "absolute w-full left-0 text-[0px] pointer-events-none"
                                      }
                                    >
                                      <Box
                                        className={
                                          "relative pointer-events-auto pl-[140px] pb-0 pr-[70px] left-0 top-0 w-full z-[6] visible perspective-[601px]"
                                        }
                                      >
                                        <Box
                                          className={
                                            "z-[6] h-auto w-auto text-white min-h-0 min-w-0 max-h-none max-w-none ml-0 mb-0 mr-0 backdrop-blur-none filter-none transform-origin-[50%_50%] transform translate-x-0 translate-y-0 opacity-100 visible"
                                          }
                                        >
                                          <Box
                                            className={
                                              "relative block pointer-events-auto align-middle clear-both float-none max-w-full min-w-full left-0 top-0 z-[9] visible perspective-[601px]"
                                            }
                                          >
                                            <Box
                                              className={
                                                "z-[9] text-white w-full h-[10px] min-h-0 min-w-0 max-h-none max-w-none backdrop-blur-none filter-none transform-origin-[50%_50%] opacity-100 transform translate-x-0 translate-y-0 visible outline-none"
                                              }
                                            ></Box>
                                          </Box>
                                          <Box
                                            className={
                                              "absolute block pointer-events-auto align-middle clear-none float-none max-w-[76px] min-w-[76px] left-[560px] top-[60px] z-[8] visible perspective-[601px]"
                                            }
                                          >
                                            <Box
                                              className={
                                                "z-[8] font-roboto h-auto text-white no-underline whitespace-normal w-[76px] min-h-0 min-w-0 max-h-none max-w-none text-left leading-[25px] tracking-[0px] font-normal text-[20px] backdrop-blur-none filter-none transform-origin-[50%_50%] opacity-100 transform translate-x-0 translate-y-0 visible"
                                              }
                                            >
                                              <ThreeDashSVG />
                                            </Box>
                                          </Box>
                                          <Box
                                            className={
                                              "relative inline-block pointer-events-auto min-w-auto align-middle clear-none float-none max-w-inherit left-0 top-0 z-[7] visible"
                                            }
                                          >
                                            <Box
                                              className={
                                                "z-[7] font-halyard-display inline-block h-auto w-auto text-[#C43C2A] no-underline whitespace-normal min-h-0 min-w-0 max-h-none max-w-none text-left leading-[90px] tracking-[-1px] font-medium text-[90px] transform-style-preserve-3d backdrop-blur-none filter-none transform-origin-[50%_50%] transform-[perspective(600px)] opacity-100 visible outline-none"
                                              }
                                            >
                                              <Box className="rs-layer lg:!text-[45px] xl:!text-[90px]">
                                                <Box className="xl:py-4 !font-semibold">
                                                  <Box
                                                    className={
                                                      "relative pl-3 inline-block"
                                                    }
                                                  >
                                                    <Box
                                                      className={"heroTexts"}
                                                    >
                                                      Discover
                                                    </Box>
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className={
                                                    "py-4 !font-semibold"
                                                  }
                                                >
                                                  <Box
                                                    className={
                                                      "relative pl-3 inline-block"
                                                    }
                                                  >
                                                    <Box
                                                      className={"heroTexts"}
                                                    >
                                                      Culinary Secrets
                                                    </Box>
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className={
                                                    " xl:py-4 !font-semibold"
                                                  }
                                                >
                                                  <Box
                                                    className={
                                                      "relative pl-3 inline-block"
                                                    }
                                                  >
                                                    <Box
                                                      className={"heroTexts"}
                                                    >
                                                      at out festival.
                                                    </Box>
                                                  </Box>
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                          <Box></Box>
                                          <Box></Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    className={
                                      "z-[5] absolute w-full left-0 bottom-0"
                                    }
                                  >
                                    <Box
                                      className={
                                        "relative pointer-events-auto pl-[140px] pr-[70px] left-0 top-0 w-full z-[6] visible perspective-[601px]"
                                      }
                                    >
                                      <Box
                                        className={
                                          "z-[6] h-auto w-auto text-white min-h-0 min-w-0 max-h-none max-w-none ml-0 pb-0 mr-0 backdrop-blur-none filter-none transform-origin-[50%_50%] transform-none opacity-100 visible"
                                        }
                                      >
                                        <Box
                                          className={
                                            "align-middle relative pointer-events-auto left-0 top-0 w-full z-[6] visible perspective-[601px]"
                                          }
                                        >
                                          <Box
                                            className={
                                              "relative block whitespace-normal z-[6] w-auto h-auto text-white no-underline min-h-0 min-w-0 max-h-none max-w-none text-left leading-[20px] backdrop-blur-none filter-none transform-origin-[50%_50%] transform-none opacity-100 visible"
                                            }
                                          >
                                            <Box
                                              className={
                                                "absolute block pointer-events-auto align-middle clear-none float-none max-w-[311px] min-w-[311px] left-[220px] top-[36px] z-[8] visible perspective-[601px]"
                                              }
                                            >
                                              <Box
                                                className={
                                                  "z-[8] font-sans h-auto text-[#363332] no-underline whitespace-normal w-[311px] min-h-0 min-w-0 max-h-none max-w-none text-left leading-[26px] tracking-normal font-normal text-[17px] backdrop-blur-none filter-none transform-origin-[50%_50%] opacity-100 transform-none visible"
                                                }
                                              >
                                                Sed ut perspiciatis unde omnis
                                                iste natus error sit voluptatem
                                                accusantium
                                              </Box>
                                            </Box>
                                            <Box
                                              className={
                                                "outline-none absolute block pointer-events-auto min-w-auto align-middle clear-none float-none max-w-inherit left-[220px] top-[102px] z-[7] visible perspective-[601px]"
                                              }
                                            >
                                              <a
                                                className={
                                                  "z-[7] font-[halyard-display] uppercase cursor-pointer h-auto w-auto text-primary no-underline whitespace-nowrap min-h-0 min-w-0 max-h-none max-w-none text-left leading-[25px] tracking-normal font-medium text-[17px] backdrop-blur-none filter-none transform-origin-[50%_50%] opacity-100 transform-none visible"
                                                }
                                              >
                                                Buy Tickets
                                                <ArrowRightAltOutlined
                                                  className={"text-primary"}
                                                  sx={{
                                                    transition: ".3s ease"
                                                  }}
                                                />
                                              </a>
                                            </Box>
                                            <Box
                                              className={
                                                "relative block pointer-events-auto align-middle clear-none float-none max-w-[180px] min-w-[180px] left-0 top-0 z-[6] visible perspective-[601px]"
                                              }
                                            >
                                              <Box
                                                className={
                                                  "relative block w-full transform-origin-[50%_50%] transform-none overflow-hidden"
                                                }
                                              >
                                                <Box
                                                  className={
                                                    "z-[6] text-white w-[180px] h-[160px] min-h-0 min-w-0 max-h-none max-w-none backdrop-filter-none filter-none transform-origin-[50%_50%] opacity-100 transform-none visible"
                                                  }
                                                >
                                                  <Image
                                                    src={
                                                      "/images/achievement.webp"
                                                    }
                                                    className={
                                                      "w-full relative"
                                                    }
                                                    width={180}
                                                    height={160}
                                                    alt={"buyTickets"}
                                                  />
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box
                                    className={
                                      "absolute block pointer-events-auto left-[1124px] top-[-20px] z-[8] visible perspective-[601px]"
                                    }
                                  >
                                    <Box
                                      className={
                                        "absolute block transform-origin-[50%_50%] transform-none overflow-hidden"
                                      }
                                    >
                                      <Box
                                        className={
                                          "outline-none z-[8] text-white w-[875px] h-[920px] min-h-0 min-w-0 max-h-none max-w-none ml-[-20px] backdrop-filter-none filter-none transform-origin-[50%_50%] opacity-100 transform-none visible"
                                        }
                                      >
                                        <Image
                                          src={"/images/homeHeroImahe3.webp"}
                                          width={875}
                                          height={920}
                                          className={
                                            "h-full w-auto object-cover min-w-96:!mr-40"
                                          }
                                          alt={"HeroImage"}
                                        />
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <Box className={"h-[840px] box-border"}></Box>
                        </Box>
                      </Box>
                    </Box>
                  </aside>
                </Box>
              </AgoraTransitionBox>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
