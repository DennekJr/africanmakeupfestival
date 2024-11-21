import Box from "@mui/material/Box";
import * as React from "react";
import { SuccessOrErrorVerification } from "@/app/(home)/success/SuccessOrErrorVerification";
import { Suspense } from "react";

const Success: () => Promise<React.JSX.Element> = async () => {
  return (
    <Suspense fallback={<Box>Loading....</Box>} className={"w-full"}>
      <SuccessOrErrorVerification />
    </Suspense>
  );
};

export default Success;
