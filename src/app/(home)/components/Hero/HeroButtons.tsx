"use client";
import Box from "@mui/material/Box";
import React from "react";
import { TransparentArrowButton, WhiteTicketButton } from "@/app/utils";

export const HeroButtons = () => {
  return <Box
    className={
      "flex flex-col lg:flex-row gap-4 w-full items-center justify-center"
    }
  >
    <WhiteTicketButton href={"https://tix.africa/discover/asf2024/checkout?step=tickets"} name={"GET A TICKET"} />
    <TransparentArrowButton name={"SPONSOR"} to={"/sponsor"} />
  </Box>;
};