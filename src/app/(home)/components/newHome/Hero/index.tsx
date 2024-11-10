import { Box } from "@mui/material";
import Image from "next/image";
import "./hero.styles.css";

export const NewHero = () => {
  const Word1 = "Discover".split("");
  const Word2 = "Culinary Secrets".split(" ");
  const Word3 = "at our festival".split(" ");
  return (
    <section className={"relative elementor-section"}>
      <Box className={"elementor-container"}>
        <Box className={"elementor-column"}>
          <Box className={"elementor-widget-wrap elementor-element-populated"}>
            <Box className={"elementor-element"}>
              <Box className={"elementor-widget-container"}>
                <Box className={"widget_area sc_widget_slider"}>
                  <aside className={"widget widget_slider"}>
                    <Box
                      className={
                        "slider_wrap slider_engine_revo slider_alias_slider-3"
                      }
                    >
                      <Box className={"wp-block-themepunch-revslider 0"}>
                        <Box className={"fullWidthWrap"}>
                          <Box className={"sliderWrap"}>
                            <Box className={"slider"}>
                              <Box className={"slides"}>
                                <Box className={"slide"}>
                                  <Box className={"rs-sbg-wrap"}>
                                    <Box className={"rs-sbg"}>
                                      <canvas
                                        width="1084"
                                        height="512"
                                      ></canvas>
                                    </Box>
                                  </Box>
                                  <Box className={"rev_row_zone_middle"}>
                                    <Box className={"parallax-wrap"}>
                                      <Box className={"parallax-row"}>
                                        <Box className={"parallax-column-wrap"}>
                                          <Box className={"rs-column"}>
                                            <Box
                                              className={
                                                "rs-parallax-wrap-1 rs-layer-hidden"
                                              }
                                            >
                                              <Box className="rs-mask-wrap">
                                                <Box
                                                  className={"rs-layer-slider"}
                                                >
                                                  <Image
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="/images/newHero.jpg"
                                                    alt=""
                                                    className="tp-rs-img rs-lazyload"
                                                    width="875"
                                                    height="920"
                                                  />
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              className={"rs-parallax-wrap-2"}
                                            >
                                              <Box className={"rs-layer"}></Box>
                                            </Box>
                                            <Box
                                              className={"rs-parallax-wrap-3"}
                                            >
                                              <Box className={"rs-layer"}>
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                  width="100%"
                                                  height="100%"
                                                  viewBox="0 0 76.354 78.024"
                                                >
                                                  <defs>
                                                    <clipPath id="clip-path">
                                                      <rect
                                                        id="Rectangle_33604"
                                                        data-name="Rectangle 33604"
                                                        width="60.559"
                                                        height="63.074"
                                                        transform="translate(0 0)"
                                                        fill="#fd4c19"
                                                      ></rect>
                                                    </clipPath>
                                                  </defs>
                                                  <g
                                                    id="element"
                                                    transform="translate(-688.102 -409.202)"
                                                  >
                                                    <g
                                                      id="Group_44344"
                                                      data-name="Group 44344"
                                                      transform="translate(688.103 426.908) rotate(-17)"
                                                      clipPath="url(#clip-path)"
                                                    >
                                                      <path
                                                        id="Path_210090"
                                                        data-name="Path 210090"
                                                        d="M13.218.569A6.534,6.534,0,0,0,4.643,3.813C1.711,10.093.476,20.232.006,25.6a1.4,1.4,0,0,0,2.377,1.127C6.274,22.943,13.415,15.5,16.391,9.234A6.47,6.47,0,0,0,13.218.569"
                                                        fill="#fd4c19"
                                                      ></path>
                                                      <path
                                                        id="Path_210091"
                                                        data-name="Path 210091"
                                                        d="M59.609,11.276A9.662,9.662,0,0,0,46.8,6.827c-9.283,4.346-20.3,14.681-25.926,20.332a2.075,2.075,0,0,0,1.63,3.533c8.007-.609,23.167-2.282,32.487-6.575a9.566,9.566,0,0,0,4.616-12.841"
                                                        fill="#fd4c19"
                                                      ></path>
                                                      <path
                                                        id="Path_210092"
                                                        data-name="Path 210092"
                                                        d="M53.309,58.285a7.037,7.037,0,0,0-4.465-8.805c-7.062-2.413-18.059-2.562-23.865-2.444a1.511,1.511,0,0,0-.931,2.676c4.5,3.727,13.3,10.512,20.352,12.971a6.965,6.965,0,0,0,8.909-4.4"
                                                        fill="#fd4c19"
                                                      ></path>
                                                    </g>
                                                  </g>
                                                </svg>
                                              </Box>
                                            </Box>
                                            <Box
                                              className={"rs-parallax-wrap-4"}
                                            >
                                              <Box className="rs-layer">
                                                <Box className="rs-splitted-lines">
                                                  <Box
                                                    className={
                                                      "relative inline-block"
                                                    }
                                                  >
                                                    {Word1.map(
                                                      (letter, index) => {
                                                        return (
                                                          <Box
                                                            key={index}
                                                            className={
                                                              "heroTexts"
                                                            }
                                                          >
                                                            {letter}
                                                          </Box>
                                                        );
                                                      },
                                                    )}
                                                  </Box>
                                                </Box>
                                                <Box
                                                  className={
                                                    "rs-splitted-lines"
                                                  }
                                                >
                                                  {Word2.map((word, index) => {
                                                    return (
                                                      <Box
                                                        key={index}
                                                        className={
                                                          "relative inline-block"
                                                        }
                                                      >
                                                        {word
                                                          .split("")
                                                          .map(
                                                            (letter, index) => {
                                                              return (
                                                                <Box
                                                                  key={index}
                                                                  className={
                                                                    "heroTexts"
                                                                  }
                                                                >
                                                                  {letter}
                                                                </Box>
                                                              );
                                                            },
                                                          )}
                                                      </Box>
                                                    );
                                                  })}
                                                </Box>
                                                <Box
                                                  className={
                                                    "rs-splitted-lines"
                                                  }
                                                >
                                                  {Word3.map((word, index) => {
                                                    return (
                                                      <Box
                                                        key={index}
                                                        className={
                                                          "relative inline-block"
                                                        }
                                                      >
                                                        {word
                                                          .split("")
                                                          .map(
                                                            (letter, index) => {
                                                              return (
                                                                <Box
                                                                  key={index}
                                                                  className={
                                                                    "heroTexts"
                                                                  }
                                                                >
                                                                  {letter}
                                                                </Box>
                                                              );
                                                            },
                                                          )}
                                                      </Box>
                                                    );
                                                  })}
                                                </Box>
                                              </Box>
                                            </Box>
                                            <Box
                                              className={"rs-parallax-wrap-5"}
                                            ></Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                  <Box className="rev_row_zone_bottom">
                                    <Box className={"rs-zone"}>
                                      <Box
                                        className={
                                          "rs-parallax-wrap-5 slider-row-wrap"
                                        }
                                      >
                                        <Box className={"slider-row"}>
                                          <Box
                                            className={
                                              "rs-parallax-wrap-bottom-text-content"
                                            }
                                          >
                                            <Box className={"rs-layer-bottom"}>
                                              Sed ut perspiciatis unde omnis
                                              iste natus error sit voluptatem
                                              accusantium
                                            </Box>
                                          </Box>
                                          <Box
                                            className={
                                              "rs-parallax-wrap-bottom-button"
                                            }
                                          >
                                            <a href="/">Buy Tickets</a>
                                          </Box>
                                          <Box
                                            className={
                                              "rs-parallax-wrap-bottom-image"
                                            }
                                          >
                                            <Box className="bottom-image-mask-wrap">
                                              <Box className="bottom-image-layer">
                                                <Image
                                                  loading="lazy"
                                                  decoding="async"
                                                  src="/images/homeHeroImahe3.webp"
                                                  alt=""
                                                  className="tp-rs-img rs-lazyload"
                                                  width="180"
                                                  height="160"
                                                />
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </aside>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
