import * as React from "react";
import Box from "@mui/material/Box";
import {StarIcon} from './utils';

const ContactUs: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box classNameName={"flex flex-col items-center justify-between text-black"}>
      <Box classNameName={"w-full grid lg:grid-cols-2 min-h-screen"}>
        <Box classNameName={"lg:py-32 bg-[#0A090B]"}>
          <Box
            classNameName={
              "w-full text-[#FCFCFC] px-6 lg:px-0 py-16 flex flex-col gap-20 ml-auto max-w-[660px]"
            }
          >
            <div classNameName="grid gap-5">
              <pre
                id="undefined-0"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-medium heading text-[32px] leading-[35.2px] lg:text-6xl lg:leading-[66px] tracking-[-1px]"
              >
                <span className="relative max-w-full break-words">Contact Us</span>
              </pre>
              <pre
                id="undefined-0"
                className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
              >
                <span className="relative max-w-full break-words">
                  We are here to help! If you have any questions, or concerns,
                  or need assistance, please reach out to us using the following
                  contact details:
                </span>
              </pre>
            </div>
            <div className="grid gap-6">
              <div className="grid gap-[18px]">
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
                >
                  <span className="relative max-w-full break-words">
                    Contact Emails:
                  </span>
                </pre>
                <ul className="grid gap-2"></ul>
              </div>
              <div className="grid gap-[18px]">
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
                >
                  <span className="relative max-w-full break-words">
                    Tickets and Ticket-Related Issues:
                  </span>
                </pre>
                <ul className="grid gap-2">
                  <li>
                    <pre
                      id="undefined-0"
                      className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                    >
                      <span className="relative max-w-full break-words">
                        Email:{" "}
                      </span>
                      <a href="mailto:tickets@africastartupfestival.com">
                        <span className="relative max-w-full break-words">
                          tickets@africastartupfestival.com
                        </span>
                      </a>
                    </pre>
                  </li>
                </ul>
              </div>
              <div className="grid gap-[18px]">
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
                >
                  <span className="relative max-w-full break-words">
                    Partnerships &amp; Exhibitions:
                  </span>
                </pre>
                <ul className="grid gap-2">
                  <li>
                    <pre
                      id="undefined-0"
                      className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                    >
                      <span className="relative max-w-full break-words">
                        Email:{" "}
                      </span>
                      <a href="mailto:partner@africastartupfestival.com">
                        <span className="relative max-w-full break-words">
                          partner@africastartupfestival.com
                        </span>
                      </a>
                    </pre>
                  </li>
                </ul>
              </div>
              <div className="grid gap-[18px]">
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
                >
                  <span className="relative max-w-full break-words">Media:</span>
                </pre>
                <ul className="grid gap-2">
                  <li>
                    <pre
                      id="undefined-0"
                      className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                    >
                      <span className="relative max-w-full break-words">
                        Email:{" "}
                      </span>
                      <a href="mailto:media@africastartupfestival.com">
                        <span className="relative max-w-full break-words">
                          media@africastartupfestival.com
                        </span>
                      </a>
                    </pre>
                  </li>
                </ul>
              </div>
              <div className="grid gap-[18px]">
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
                >
                  <span className="relative max-w-full break-words">
                    Speaker &amp; Programs:
                  </span>
                </pre>
                <ul className="grid gap-2">
                  <li>
                    <pre
                      id="undefined-0"
                      className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                    >
                      <span className="relative max-w-full break-words">
                        Email:{" "}
                      </span>
                      <a href="mailto:programs@africastartupfestival.com">
                        <span className="relative max-w-full break-words">
                          programs@africastartupfestival.com
                        </span>
                      </a>
                    </pre>
                  </li>
                </ul>
              </div>
              <div className="grid gap-[18px]">
                <pre
                  id="undefined-0"
                  className="font-sans w-full break-words whitespace-pre-wrap min-h-6 heading text-xl font-normal"
                >
                  <span className="relative max-w-full break-words">
                    General Comments or Suggestions:
                  </span>
                </pre>
                <ul className="grid gap-2">
                  <li>
                    <pre
                      id="undefined-0"
                      className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                    >
                      <span className="relative max-w-full break-words">
                        Email:{" "}
                      </span>
                      <a href="mailto:info@africastartupfestival.com">
                        <span className="relative max-w-full break-words">
                          info@africastartupfestival.com
                        </span>
                      </a>
                    </pre>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
        </Box>
        <div className="w-full py-32 bg-white p-12 flex items-center justify-center">
          <StarIcon />
        </div>
      </Box>
    </Box>
  );
};

export default ContactUs;
