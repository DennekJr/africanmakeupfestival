import Box from "@mui/material/Box";
import { StagesTypes } from "../../stages.types";
import { Typography } from "@mui/material";

export const StageCard = ({id, stageBodyTextColor, order, background, image, stageBody, stageName, textColor}: StagesTypes,) => {
  return <Box id={id}
    className={`aspect-square relative rounded-2xl overflow-clip p-6 flex flex-col justify-between !text-[${textColor}]`}
              sx={{background: background}}
  >
    {image()}
    <p className={`!text-primary text-5xl leading-[52.8px] tracking-[-1px] font-medium`}>
      {order}
    </p>
    <div className={`py-3.5 border-t border-t-[#C9C8CB] min-h-[35%]`}>
      <p className={`!text-primary text-5xl leading-[52.8px] tracking-[-1px] font-medium`}>
        {stageName}
      </p>
      <Typography className={`text-xl text-secondary`} sx={{color: stageBodyTextColor}}>
        <p>{stageBody}</p>
      </Typography>
    </div>
  </Box>
};