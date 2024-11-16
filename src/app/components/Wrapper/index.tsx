"use client";
import * as React from "react";
import { ReactNode } from "react";
import Box from "@mui/material/Box";
import NavBar from "../NavBar";
import { Footer } from "../Footer";
import { usePathname } from "next/navigation";

export default function WebWrapper({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <Box
      sx={{ display: "flex" }}
      className={"w-screen min-h-dvh flex flex-col relative"}
    >
      <NavBar />
      <Box component="main" sx={{ paddingTop: path !== "/" ? "65px" : "0" }} className={"lg:pt-0"}>{children}</Box>
      <Footer />
    </Box>
  );
}
