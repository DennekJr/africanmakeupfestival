// app/not-found.tsx
"use client";
import { useRouter } from "next/navigation";
import { Button, Box, Paper, Typography } from "@mui/material";
import WebWrapper from "@/app/components/Wrapper";
import Image from "next/image";
import React from "react";
import { notFound } from "@/app/ErrorPage/assets/svg";
import { ErrorMessage, ErrorStatus } from "@/app/error";
import styles from "@/app/ErrorPage/ErrorPage.module.css";

export default function NotFound() {
  const router = useRouter();
  return (
    <WebWrapper>
      <Box
        className={"m-auto outline-none bg-lightGrey"}
        sx={{
          textAlign: "center",
          height: "calc(100vh - 88px)",
          padding: "50px",
          color: "white"
        }}
      >
        <Box className={"flex flex-col align-center justify-center h-full w-full "}>
          <Box className={"flex flex-col items-center justify-center"}>
            <Image
              src={"/images/errors/404.webp"}
              className={"max-w-full max-h-full md:w-[400px] lg:w-[566px]  mb-[24px] m-0 p-0"}
              alt={"not found"}
              width={300}
              style={{ filter: "brightness(40%) contrast(100%)" }}
              height={300}
            />
          </Box>
          <Typography variant="h1" className={"text-center text-lightSecondary mb-3"}>
            This page cannot be found
          </Typography>
          <Box className={"text-lightSecondary"}>
            Try a different destination or head back to the{" "}
            <a href="/" className="underline text-primary p-[1px] rounded-[4px]">
              Home page
            </a>
            .
          </Box>
        </Box>
      </Box>
    </WebWrapper>
  );
}
