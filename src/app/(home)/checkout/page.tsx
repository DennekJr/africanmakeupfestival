import * as React from "react";
import Box from "@mui/material/Box";
import { CheckoutForm } from "@/app/(home)/checkout/components/CheckoutForm";
import { HiddenFormDropdown } from "@/app/(home)/checkout/components/hiddenFormDropdown/hiddenFormDropdown";

const Checkout: () => Promise<React.JSX.Element> = async () => {
  // const { data } = useMyContext();
  console.log("Data passed");
  return (
    <Box className={"w-full"}>
      <CheckoutForm />
    </Box>
  );
};

export default Checkout;
