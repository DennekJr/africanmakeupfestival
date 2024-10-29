import * as React from "react";
import Box from "@mui/material/Box";
// import { CheckoutForm } from "../../../app/(home)/checkout/components/CheckoutForm";
import dynamic from "next/dynamic";

const { CheckoutForm } = dynamic(() => import('../../../app/(home)/checkout/components/CheckoutForm'), { ssr: false });

const Checkout: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box className={"w-full"}>
      <CheckoutForm />
    </Box>
  );
};

export default Checkout;
