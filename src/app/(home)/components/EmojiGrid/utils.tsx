import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Image from "next/image";
import { EmojiGridType } from "./emojigrid.types";

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
                  <Image
                    key={index}
                    alt={emoji.alt}
                    loading="lazy"
                    width="60"
                    height="60"
                    decoding="async"
                    data-nimg="1"
                    className="size-9 lg:size-16"
                    style={{ color: "transparent" }}
                    src={emoji.src}
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
