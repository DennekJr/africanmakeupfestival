import * as React from "react";
import Box from "@mui/material/Box";
import { CheckoutForm } from "@/app/(home)/checkout/components/CheckoutForm";
// import { useMyContext } from "@/app/components/CheckoutContext";

const Checkout: () => Promise<React.JSX.Element> = async () => {
  // const { data } = useMyContext();
  console.log('Data passed');
  return (
    <Box className={'w-full'}>
      <CheckoutForm />
    </Box>
  );
}

export default Checkout;