"use client";
import Box from "@mui/material/Box";
import { Collapse } from "@mui/material";
import React, { useMemo, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Minus, Plus, TicketTag } from "./utils";
import { FortyFiveDegreeArrow } from "../../../(home)/sponsor/Hero/utils";
import { TICKETPURCHASEMENU } from "./ticketPurchase.constants";
import {
  setTickets, setBillingTotal
} from "../../../lib/features/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { getTicketCost } from "@/app/(home)/checkout/components/utils";

export const TicketPurchase = () => {
  const initialState = [
    { ticketName: "explorer", isOpen: false },
    { ticketName: "founder", isOpen: false },
    { ticketName: "investor", isOpen: false },
    { ticketName: "delegate", isOpen: false },
  ];

  const [isOpen, setIsOpen] = useState(initialState);
  const [error, setError] = useState("");
  const values = useAppSelector((state) => state.checkout.tickets);
  const router = useRouter();
  const tickets = useMemo(() => Object.values(TICKETPURCHASEMENU), []);
  const dispatch = useAppDispatch()

  const handleClick = (id: string) => {
    const newState = isOpen.map((item) => {
      if (item.ticketName !== id) {
        return item;
      } else {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
    });
    setIsOpen(newState);
  };
  const handleChange = (math: string, id: string) => {
    setError("");
    const newState = values.map((ticketValue) => {
      if (ticketValue.ticketName !== id) {
        return ticketValue;
      } else {
        const newValue =
          math === "plus"
            ? ticketValue.value + 1
            : ticketValue.value > 0
              ? ticketValue.value - 1
              : ticketValue.value;
        return {
          ...ticketValue,
          value: newValue,
        };
      }
    });
    const newTotal = Object.values(newState).reduce((acc, ticket) => {
      if (ticket.value < 1) return acc;

      const value = getTicketCost(ticket);

      return acc + value;
    }, 0);
    dispatch(setTickets(newState));
    dispatch(setBillingTotal(newTotal));
  };

  const handleProceedToCheckout = () => {
    const hasAddedTicket = values.some(ticket => ticket.value > 0);
    if (hasAddedTicket) {
      router.push("/checkout");
    } else {
      setError("Please select ticket(s) to proceed to checkout");
    }
  }
  return (
    <>
      {tickets.map((ticket, index) => {
        const open = isOpen.find((item) => {
          if (item.ticketName === ticket.id) {
            return item.isOpen;
          }
          return false;
        });
        const ticketNumber = values.find((item) => {
          if (item.ticketName === ticket.id) {
            return item.value;
          }
          return 0;
        });
        return (
          <Box
            key={index}
            className="border-b border-lightSecondary p-5 lg:p-8 space-y-6"
          >
            <Box className="space-y-2 lg:space-y-4">
              <Box className="flex flex-col-reverse lg:grid grid-cols-5 gap-2">
                <Box className="col-span-4 space-y-1">
                  <p className="text-2xl lg:text-3xl xl:text-6xl font-medium text-black">
                    {ticket.title}
                  </p>
                  <p className="text-sm lg:text-base text-lightSecondary">{ticket.subTitle}</p>
                </Box>
                <TicketTag ticket={ticket} />
              </Box>
              <div data-state={open?.isOpen}>
                <button
                  type="button"
                  onClick={() => handleClick(ticket.id)}
                  className="flex items-center gap-2 text-midPrimary"
                >
                  <span>See more</span>
                  {open?.isOpen ? <ExpandLess /> : <ExpandMore />}
                </button>
                <div
                  className="list-disc text-[#504E56] pt-2"
                  style={{ position: "relative" }}
                >
                  <Collapse in={open?.isOpen} timeout="auto" unmountOnExit>
                    <Box className={"flex flex-col pt-2 text-lightSecondary"}>
                      {ticket.benefits.map((benefit, index) => {
                        return <li key={index}>{benefit}</li>;
                      })}
                    </Box>
                  </Collapse>
                </div>
              </div>
            </Box>
            <Box className="space-y-4">
              <div className="flex gap-4 lg:gap-6">
                <p className="text-2xl lg:text-3xl xl:text-5xl text-black font-medium">
                  {ticket.price}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <Minus handleClick={() => handleChange("minus", ticket.id)} />
                <p className="text-2xl lg:text-3xl xl:text-5xl font-medium text-black">
                  {ticketNumber?.value ?? 0}
                </p>
                <Plus handleClick={() => handleChange("plus", ticket.id)} />
              </div>
            </Box>
          </Box>
        );
      })}
      <Box className="py-10 lg:py-12 flex flex-col justify-center">
        <p className="text-center text-warning text-lg font-medium">{error}</p>
        <button
          onClick={handleProceedToCheckout}
          className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-[#FCFCFC] hover:bg-[#0A090B]/90 h-14 px-6 py-4 rounded-full mx-auto min-w-[80%]"
        >
          <span>PROCEED TO CHECK OUT</span>
          <FortyFiveDegreeArrow />
        </button>
      </Box>
    </>
  );
};
