import Box from "@mui/material/Box";
import { StagesTypes } from "../../stages.types";
import { Typography } from "@mui/material";

export const StageCard = ({
                            id,
                            stageBodyTextColor,
                            orderColor,
                            stageTitleColor,
                            order,
                            background,
                            image,
                            stageBody,
                            stageName,
                            textColor
                          }: StagesTypes) => {
  return <Box id={id}
    className={`aspect-square relative rounded-2xl overflow-clip p-6 flex flex-col justify-between !text-[${textColor}]`}
              style={{ background: background }}
  >
    {image()}
    <p className={`text-5xl leading-[52.8px] tracking-[-1px] font-medium`}
       style={{ color: order !== "03" ? "hsla(270,10%,4%,0.2)" : "#F5F5F5" }}>
      {order}
    </p>
    <div className={`py-3.5 border-t border-t-[#C9C8CB] min-h-[35%]`}>
      <Typography className={`text-xl text-${stageBodyTextColor}`}>
        <p>{stageBody}</p>
      </Typography>
      <p className={`text-[${stageTitleColor}] text-5xl leading-[52.8px] tracking-[-1px] font-medium`}
         style={{ color: stageTitleColor }}>
        {stageName}
      </p>
    </div>
  </Box>
};