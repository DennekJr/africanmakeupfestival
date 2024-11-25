"use client";
import { styled } from "@mui/system";
import React from "react";

export const HollowPrimaryColorSpan = styled("span")({
  "-webkit-text-stroke": "2px #C43C2A" /* Sets the outline color and thickness */
});

export const HollowFestival = () => {
  return <HollowPrimaryColorSpan
    className={
      "hollowText relative max-w-full break-words text-textColor leading-[0.8]"
    }
  >
    Festival
  </HollowPrimaryColorSpan>;
};