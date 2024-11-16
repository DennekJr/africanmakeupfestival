import { Box } from "@mui/material";
import { StarRateSharp } from "@mui/icons-material";

export const SkinCareWordsLoop = ({ wordCount }: { wordCount: number }) => {
  return (
    <Box className="flex">
      {Array.from({ length: wordCount }).map((_, index) => (
        <Box key={index} className={"flex items-center justify-center"}>
          <Box className={"flex items-center justify-center"}>
            <span
              className={
                "inline-block opacity-100 text-primary font-semibold text-[155px]"
              }
              style={{ letterSpacing: "-1px", lineHeight: "0.8em" }}
            >
              Skin
            </span>
            <span className={"opacity-100 mx-[3rem] text-primary"}>
              <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
            </span>
          </Box>

          <Box
            className={
              "translate-x-0 translate-y-0 scale-100 flex items-center justify-center"
            }
          >
            <span
              className={"opacity-100 text-primary font-semibold text-[155px]"}
              style={{ letterSpacing: "-1px", lineHeight: "0.8em" }}
            >
              Care
            </span>
            <span className={"opacity-100 mx-[3rem] text-primary"}>
              <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
            </span>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
export const FestivalWordLoop = ({ wordCount }: { wordCount: number }) => {
  return (
    <Box className="flex">
      {Array.from({ length: wordCount }).map((_, index) => (
        <Box key={index} className={"flex items-center justify-center"}>
          <span
            className={
              "inline-block opacity-100 text-primary font-semibold text-[155px]"
            }
            style={{ letterSpacing: "-1px", lineHeight: "0.8em" }}
          >
            Festival
          </span>
          <span className={"opacity-100 mx-[3rem] text-primary"}>
            <StarRateSharp className={"animate-spin !text-[5.5rem]"} />
          </span>
        </Box>
      ))}
    </Box>
  );
};
