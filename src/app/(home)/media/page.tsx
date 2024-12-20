import Box from "@mui/material/Box";
import { Hero } from "./Hero";
import * as React from "react";
import { AttendingMedia } from "./AttendingMedia";
import { MediaSources } from "./MediaSources";

const Media: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box
      className={
        "bg-[#000000] flex flex-col items-center justify-between text-black"
      }
    >
      <Hero />
      <Box className={"bg-[#ffffff] w-full"}>
        <AttendingMedia />
        <MediaSources />
      </Box>
    </Box>
  );
};
export default Media;
