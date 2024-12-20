import * as React from "react";
import Box from "@mui/material/Box";
import { BookingConfirmation } from "@/app/(home)/booking-confirmation/BookingConfirmation";

const Checkout: () => Promise<React.JSX.Element> = async () => {
  return (
    <Box className={"w-full"}>
      <BookingConfirmation />
    </Box>
  );
};

export default Checkout;
