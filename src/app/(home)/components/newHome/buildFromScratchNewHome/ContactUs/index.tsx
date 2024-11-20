"use client";
import { Box } from "@mui/material";
import {
  AgoraTransitionBox,
  ContactUsBackgroundImageBox,
  ContactUsCheckBox,
} from "@/app/(home)/components/newHome/utils";
import { useState } from "react";
import {
  ContactUsField,
  ContactUsTextArea,
  HiddenFormInputs
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/ContactUs/utils";
import { PrimaryButton } from "@/app/utils";

export const ContactUs = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <ContactUsBackgroundImageBox className={"py-[20px]"}>
      <Box
        className={
          "max-w-[1320px] min-h-[720px] items-center flex mx-auto relative"
        }
      >
        <Box className={"flex py-0 flex-wrap content-start w-full"}>
          <section className={"w-full relative"}>
            <Box className={"flex flex-wrap mx-auto relative"}>
              <Box className={"w-full md:w-1/2"}>
                <Box className={"flex flex-wrap relative content-start"}></Box>
              </Box>
              <Box className={"w-full md:w-1/2 flex mx-auto relative px-[15px] md:px-0"}>
                <Box
                  className={
                    "md:py-[10%] p-[8%] md:px-[9%] bg-[#F8F0EE] w-full flex flex-wrap content-start"
                  }
                >
                  <Box className={"mb-0 w-full"}>
                    <AgoraTransitionBox>
                      <Box className={"relative"}>
                        <span
                          className={
                            "text-primary mb-[1em] text-[14px] leading-[18px] font-semibold uppercase"
                          }
                          style={{ letterSpacing: "1.8px" }}
                        >
                          Contact Us
                        </span>
                        <h2
                          className={
                            "leading-[1.02em] ml-[-1px] text-[2.765em] text-primary"
                          }
                        >
                          Have questions?
                          <br /> Get in touch!
                        </h2>
                      </Box>
                      <Box className={"h-[1.5vw]"}>
                        <AgoraTransitionBox>
                          <Box className={"h-[1.5vw]"} />
                        </AgoraTransitionBox>
                      </Box>
                      <Box className={"w-full"}>
                        <AgoraTransitionBox>
                          <Box
                            className={"absolute overflow-hidden"}
                            sx={{
                              clipPath: "inset(50%)",
                              clip: "rect(1px, 1px, 1px, 1px)",
                              wordWrap: "normal",
                            }}
                          >
                            <p></p>
                            <ul
                              className={"box-border mb-[1.7em] pl-[1.5em]"}
                            ></ul>
                          </Box>
                          <form>
                            <HiddenFormInputs />
                            <div className="box-border">
                              <div
                                className="mr-[-30px]"
                                style={{ letterSpacing: "-10px" }}
                              >
                                <div className="w-1/2 pb-[20px] inline-block z-[20] pr-[30px]">
                                  <Box
                                    className={"m-0 box-border"}
                                    style={{ letterSpacing: 0 }}
                                  >
                                    <ContactUsField field={"First Name"} />
                                  </Box>
                                </div>
                                <div className="w-1/2 pb-[20px] inline-block z-[20] pr-[30px]">
                                  <Box
                                    className={"m-0 box-border"}
                                    style={{ letterSpacing: 0 }}
                                  >
                                    <ContactUsField field={"Last Name"} />
                                  </Box>
                                </div>
                              </div>
                              <div
                                className="flex-wrap flex mr-[-30px] pb-[30px]"
                                style={{ letterSpacing: "-10px" }}
                              >
                                <div className="w-1/2 pb-[20px] inline-block z-[20] pr-[30px]">
                                  <Box
                                    className={"m-0 box-border"}
                                    style={{ letterSpacing: 0 }}
                                  >
                                    <ContactUsField field={"Email"} />
                                  </Box>
                                </div>
                                <div className="w-1/2 pb-[20px] inline-block z-[20] pr-[30px]">
                                  <Box
                                    className={"m-0 box-border"}
                                    style={{ letterSpacing: 0 }}
                                  >
                                    <ContactUsTextArea field={"Message"} />
                                  </Box>
                                </div>
                              </div>
                              <p>
                                <span
                                  className="mb-[10px] block text-left box-border relative"
                                  data-name="acceptance"
                                >
                                  <span className="text-left block text-lightSecondary">
                                    <span className="m-0 inline-block box-border">
                                      <label
                                        className={"flex items-center w-full hover:cursor-pointer"}
                                      >
                                        <input
                                          type="checkbox"
                                          name="acceptance"
                                          value="1"
                                          aria-invalid="false"
                                          className="custom-checkbox absolute m-0 p-0 inline-block align-baseline"
                                          style={{
                                            transition:
                                              "color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
                                            clip: "rect(1px, 1px, 1px, 1px)",
                                          }}
                                        />
                                        <ContactUsCheckBox
                                          onClick={() => {
                                            setIsClicked(!isClicked);
                                          }
                                          }
                                          className={
                                            "relative text-[14px] pl-[1.8em] leading-[22px] " +
                                            `${!isClicked && "before:!content-['']"}`
                                          }
                                        >
                                          I agree that my data is{" "}
                                          <a
                                            className={"border-b-[#363332]"}
                                            href="/"
                                          >
                                            collected.
                                          </a>
                                        </ContactUsCheckBox>
                                      </label>
                                    </span>
                                  </span>
                                </span>
                                <br />
                                <span
                                >
                                  <PrimaryButton name={"Get in Touch"} />
                                  {/*<input*/}
                                  {/*  className="bg-primary !text-white"*/}
                                  {/*  type="submit"*/}
                                  {/*  value="Get in Touch"*/}
                                  {/*/>*/}
                                </span>
                                <span className="mx-[15px] inline-block p-0 align-middle w-[16px] h-[16px]">
                                  <svg
                                    className="animate-spin h-5 w-5 mr-3 ..."
                                    viewBox="0 0 24 24"
                                  ></svg>
                                </span>
                              </p>
                            </div>
                          </form>
                        </AgoraTransitionBox>
                      </Box>
                    </AgoraTransitionBox>
                  </Box>
                </Box>
              </Box>
            </Box>
          </section>
        </Box>
      </Box>
    </ContactUsBackgroundImageBox>
  );
};
