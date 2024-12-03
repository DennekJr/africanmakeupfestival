import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { TicketPurchaseTypes } from "@/app/(home)/ticket/TicketPurchase/ticketPurchase.types";
import { styled } from "@mui/material/styles";

export const TicketBox = styled(Box)(({}) => ({
  position: "relative",
  borderRadius: "20px",
  overflow: "hidden",
  // zIndex: 5,

  "&::before, &::after": {
    content: "\"\"",
    position: "absolute",
    top: "47%",
    width: "80px", // Adjust size of the curve
    height: "80px", // Adjust size of the curve
    backgroundColor: "#F5F5F5",
    borderRadius: "35%", // Creates the circular shape
    transform: "translateY(-50%)",
    zIndex: 1
  },

  "&::before": {
    left: "-40px" // Adjust for proper alignment on the left
  },

  "&::after": {
    right: "-40px" // Adjust for proper alignment on the right
  }
}));

export const TicketContent = styled(Box)({
  position: "relative"
  // zIndex: 2,
});
export const Plus = ({ handleClick }: {handleClick: () => void}) => {
  return <div
    role="button"
    className="p-2 h-auto aspect-square bg-primary rounded-md text-white"
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
    className="p-2 h-auto bg-midGrey text-[#504E56] rounded-md"
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