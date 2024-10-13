import Box from "@mui/material/Box";
import * as React from "react";
import { TicketPurchase } from "./TicketPurchase";
import { FortyFiveDegreeArrow } from "../sponsor/Hero/utils";

const Ticket: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box className={"w-full bg-[#000000]"}>
      <Box
        className={"pt-14 lg:py-20 xl:py-28 2xl:py-32 space-y-8 w-full bg-[]"}
      >
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center heading text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px] !text-7xl lg:!text-9xl xl:!text-[286px] xl:!leading-[286px] font-medium text-white"
          >
            <span className="relative max-w-full break-words">TICKETS</span>
          </pre>
        </Box>
        <Box
          className={
            "max-w-[945px] mx-auto w-full text-[#0A090B] bg-white pt-5 lg:pt-8 xl:pt-14 rounded-t-3xl lg:rounded-3xl"
          }
        >
          <TicketPurchase />
          <Box className="py-10 lg:py-12 flex justify-center">
            <button className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-1300 text-[#FCFCFC] hover:bg-gray-1300/90 h-14 px-6 py-4 rounded-full mx-auto min-w-[80%]">
              <span>PROCEED TO CHECK OUT</span>
              <FortyFiveDegreeArrow />
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ticket;
