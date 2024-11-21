import Box from "@mui/material/Box";
import * as React from "react";
import { SuccessOrErrorVerification } from "@/app/(home)/success/SuccessOrErrorVerification";

const Success: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box className={"w-full"}>
      <SuccessOrErrorVerification />
    </Box>
  );
};

export default Success;
