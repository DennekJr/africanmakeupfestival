import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TicketPurchaseTypes } from "@/app/(home)/ticket/TicketPurchase/ticketPurchase.types";

export const Plus = ({ handleClick }: {handleClick: () => void}) => {
  return <div
    role="button"
    className="p-2 h-auto aspect-square bg-black rounded-full text-white"
    onClick={handleClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-plus size-4 lg:size-6"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5v14"></path>
    </svg>
  </div>
}

export const Minus = ({ handleClick }: {handleClick: () => void}) => {
  return <div
    role="button"
    onClick={handleClick}
    className="p-2 h-auto bg-[#C8C8CB] text-[#504E56] rounded-full"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-minus size-4 lg:size-6"
    >
      <path d="M5 12h14"></path>
    </svg>
  </div>
}

export const TicketTag = ({ticket}: {ticket: TicketPurchaseTypes}) => {
  return (
    <Box sx={{ visibility: ticket.ticketTag ?? "hidden" }}>
      <button
        className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-100 bg-transparent text-gray-100 px-6 rounded-full !text-black !border-black relative py-1.5 md:py-2 lg:py-3 h-auto"
        type="button"
      >
        {ticket.ticketTag?.tagIcon !== undefined && (
          <Image
            alt={ticket.ticketTag?.tagType ?? ""}
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            className="absolute -bottom-2 -left-2 size-6 lg:size-8"
            style={{ color: "transparent" }}
            src={ticket.ticketTag!.tagIcon}
          />
        )}
        {ticket.ticketTag?.tagType}
        {ticket.ticketTag?.tagIcon !== undefined && (
          <Image
            alt="fire emoji"
            loading="lazy"
            width="32"
            height="32"
            decoding="async"
            className="absolute -top-2 -right-2 size-6 lg:size-8"
            style={{ color: "transparent" }}
            src={ticket.ticketTag!.tagIcon}
          />
        )}
      </button>
    </Box>
  );
}