import Box from "@mui/material/Box";
import { useMemo } from "react";
import { EMOJIGRID_EMOJIS } from "./emojiGrid.constants";
import { EmojiLoop } from "./utils";

export const EmojiGrid = () => {
  const emojiGroups = useMemo(() => Object.values(EMOJIGRID_EMOJIS), []);

  return (
    <section
      className={"mx-auto max-w-[1320px] w-full grid gap-3 py-12 px-6 md:grid-cols-6"}
    >
      <Box
        className={
          "bg-[#F2F2F2] col-span-1 rounded-3xl min-h-[219px] flex flex-col items-center justify-center gap-5 md:gap-9 lg:gap-12 p-3.5 md:col-span-3 md:row-span-2"
        }
      >
        <EmojiLoop emojiGroups={emojiGroups} text={"Attendees"} />
      </Box>
      <Box
        className={
          "bg-[#F2F2F2] col-span-1 rounded-3xl min-h-[219px] flex flex-col items-center justify-center gap-5 md:gap-9 p-3.5 lg:flex-row lg:gap-5 md:col-span-3 md:row-span-1"
        }
      >
        <EmojiLoop emojiGroups={emojiGroups} text={"Countries"} />
      </Box>
      <Box
        className={
          "bg-[#F2F2F2] col-span-1 rounded-3xl min-h-[219px] flex flex-col items-center justify-center gap-5 md:gap-9 p-3.5 lg:flex-row lg:gap-5 md:col-span-3 md:row-span-1"
        }
      >
        <EmojiLoop emojiGroups={emojiGroups} text={"Analysts"} />
      </Box>
      <Box
        className={
          "bg-[#F2F2F2] col-span-1 rounded-3xl min-h-[219px] flex flex-col items-center justify-center gap-5 md:gap-9 lg:gap-12 p-3.5 relative md:col-span-2 md:row-span-1"
        }
      >
        <EmojiLoop emojiGroups={emojiGroups} text={"Meetings"} />
      </Box>
      <Box
        className={
          "bg-[#F2F2F2] col-span-1 rounded-3xl min-h-[219px] flex flex-col items-center justify-center gap-5 md:gap-9 p-3.5 lg:flex-row lg:gap-5 md:col-span-4 md:row-span-1"
        }
      >
        <EmojiLoop emojiGroups={emojiGroups} text={"Speakers"} />
      </Box>
    </section>
  );
};
