import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { EmojiGridType } from "./emojigrid.types";
import { ImageComponent } from "../../../components/ImageComponent";
import React from "react";

export const EmojiLoop = ({
  emojiGroups,
  text,
}: {
  emojiGroups: EmojiGridType[];
  text: string;
}) => {
  return (
    <>
      {emojiGroups.map((emojiGrid, index) => {
        if (emojiGrid.regularText.includes(text)) {
          return (
            <>
              <Box
                className={"text-center grid gap-2 text-[#0A090B]"}
                key={index}
              >
                <h2 className="text-5xl lg:text-6xl lg:leading-[66px] xl:text-[90px] xl:leading-[90px] tracking-[-3px] font-medium leading-none">
                  {emojiGrid.boldText}
                </h2>
                <Typography className="lg:text-xl">
                  {emojiGrid.regularText}
                </Typography>
              </Box>
              <Box className={"flex"}>
                {emojiGrid.emojis.map((emoji, index) => (
                  <ImageComponent
                    key={index}
                    fileName={emoji.src}
                    className={"size-9 !lg:size-16"}
                    alt={emoji.alt}
                    style={{ color: "transparent" }}
                    height={"60"}
                    width={"60"}
                    loading={"lazy"}
                  />
                ))}
              </Box>
            </>
          );
        }
        return;
      })}
    </>
  );
};
