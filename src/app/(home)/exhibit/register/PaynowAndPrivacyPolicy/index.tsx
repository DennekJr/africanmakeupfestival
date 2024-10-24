"use client";
import { FortyFiveDegreeArrow } from "@/app/(home)/media/Hero/utils";
import { Button, Checkbox } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import { useAppSelector } from "@/app/lib/hooks";
import { useState } from "react";

const labelProps = {
  inputProps: { "aria-label": "Checkbox", style: { backgroundColor: "red" } },
};
export const PaynowAndPrivacyPolicy = ({handlePayment}: {handlePayment: () => void}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Box className={"my-[calc(2rem*calc(1-0))]"}>
      <Button
        type={'submit'}
        className={
          "inline-flex items-center justify-center gap-3 my-[calc(2rem*calc(1-0))] space-y-8 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] !text-[#FCFCFC] hover:bg-[#0A090B]/90 h-14 px-6 !py-4 !rounded-full relative w-full"
        }
        endIcon={<FortyFiveDegreeArrow />}
        onClick={handlePayment}
      >
        Pay Now
      </Button>
      <div className="grid gap-6 text-[#1E1C21] my-[calc(2rem*calc(1-0))]">
        <p>
          The Africa Startup Festival and it’s subsidiaries are committed to
          protecting and respecting your privacy. We will only use your personal
          information to manage your account and provide the products and
          services you have requested from us. If you agree to us reaching out
          for this purpose, please indicate your consent by ticking the box
          below.
        </p>
        <div
          className="space-y-2 flex items-center space-x-3"
          style={{ position: "relative" }}
        >
          <Checkbox
            onClick={() => setIsChecked(!isChecked)}
            checked={isChecked}
            className={
              "bg-black !border-black border-2 [&>svg]:border-black [&>svg]:border-[.5px] [&>svg]:border-solid [&>svg]:rounded-md"
            }
            {...labelProps}
          />
          <label
            className=" text-[#1E1C21] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-gray-1200 !mt-0"
            htmlFor=":rh:-form-item"
          >
            I agree to the Privacy Policy of ASF
          </label>
        </div>
      </div>
    </Box>
  );
};
