"use client"
import Box from "@mui/material/Box";
import { ArrowDownImage } from "./utils";
import { useMemo } from "react";
import { EXHIBITIONBOOTHCONSTANTMENU } from "./exhibitionBooth.constants";
import { WhiteBgArrowButton } from "@/app/utils";
import { useRouter } from "next/navigation";

export const ExhibitionBooth = () => {
  const booths = useMemo(() => Object.values(EXHIBITIONBOOTHCONSTANTMENU), []);
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/exhibit/register')
  }
  return (
    <Box
      className={
        "w-full py-12 px-6 xl:py-24 2xl:py-32 bg-[#0A090B] text-[#FCFCFC] relative bg-[url(https://www.africastartupfestival.com/grid-section.svg)] bg-repeat-y bg-top"
      }
    >
      <ArrowDownImage />
      <Box className={"max-w-[1320px] mx-auto grid gap-14"}>
        <Box>
          <h3 className="text-[23px] leading-[27.6px] tracking-[-1px] lg:text-5xl lg:leading-[52.8px] font-medium">
            Choose an exhibition booth <br />
            that works for you
          </h3>
        </Box>
        <Box
          className={
            "rounded-3xl lg:py-8 grid sm:grid-cols-1 gap-8 relative border border-[#FCFCFC]"
          }
        >
          {booths.map((booth, index) => {
            const lastIndex = index === booths.length - 1;
            return (
              <Box
                key={index}
                className={
                  "grid sm:grid-cols-2 md:px-16 px-4 grid-cols-1 gap-6 lg:gap-8 md:py-8 py-6 border-[#504E56]" +
                  `${!lastIndex ? " border-b" : ""}`
                }
              >
                <Box className="col-span-1 space-y-1.5">
                  <p className="capitalize text-[23px] leading-[27.6px] md:text-5xl lg:leading-normal text-xl font-medium text-[#FCFCFC]">
                    {booth.title} <br /> {booth.price}
                  </p>
                  <p className="text-[#C6C6CD]">{booth.location}</p>
                </Box>
                <Box className={"grid gap-7"}>
                  <ol className="col-span-1 list-disc grid gap-4 text-[#C8C8CB] pl-4 lg:pl-0">
                    {booth.list.map((listItem, index) => (
                      <li className="text-xl" key={index}>
                        {listItem}
                      </li>
                    ))}
                  </ol>
                  <Box onClick={handleNavigate}>
                    <WhiteBgArrowButton
                      name={"Book"}
                      classNames={
                        "gap-3 h-14 px-6 py-4 rounded-full w-full md:w-auto !text-black"
                      }
                    />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
