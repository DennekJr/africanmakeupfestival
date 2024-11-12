"use client";
import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import NavBar from "../NavBar";
import { Footer } from "../Footer";

export default function WebWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{ display: "flex" }}
      className={"w-screen min-h-dvh flex flex-col relative"}
    >
      <NavBar />
      <Box component="main" className={'pt-[65px] lg:pt-0'}>{children}</Box>
      <Footer />
    </Box>
  );
}
