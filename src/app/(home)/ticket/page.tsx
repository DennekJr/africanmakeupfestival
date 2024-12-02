import Box from "@mui/material/Box";
import * as React from "react";
import { TicketPurchase } from "./TicketPurchase";

const Ticket: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box className={"w-full bg-[#000000]"}>
      <Box
        className={"pt-14 lg:py-20 xl:py-28 2xl:py-32 space-y-8 w-full"}
      >
        <Box>
          <pre
            id="undefined-0"
            className="font-sans w-full break-words whitespace-pre-wrap min-h-6 text-center heading text-5xl leading-[52.8px] lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px] !text-7xl lg:!text-9xl xl:!text-[286px] xl:!leading-[286px] font-medium text-white"
          >
            <span className="relative max-w-full break-words text-lightGrey">TICKETS</span>
          </pre>
        </Box>
        <Box
          className={
            "max-w-[945px] mx-auto w-full text-lightGrey bg-textColor pt-5 lg:pt-8 xl:pt-14 rounded-t-3xl lg:rounded-3xl"
          }
        >
          <TicketPurchase />
        </Box>
      </Box>
    </Box>
  );
};

export default Ticket;
