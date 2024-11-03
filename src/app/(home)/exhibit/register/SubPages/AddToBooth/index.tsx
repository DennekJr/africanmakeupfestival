"use client";
import { Box } from "@mui/material";
import {
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import { BoothsSlider } from "@/app/(home)/exhibit/register/SubPages/AddToBooth/Slider";
import { AddOnList } from "@/app/(home)/exhibit/register/SubPages/AddToBooth/AddOnList";
import { CheckoutItems } from "@/app/(home)/exhibit/register/SubPages/AddToBooth/CheckoutItems";
import '../subpages.styles.css';
import dynamic from "next/dynamic";

const DiscountCheckout = dynamic(() => import('./DiscountCheckout'), { ssr: false });

export const AddToBooth = () => {
  return (
    <section id={"pageTop"} className={"w-full mt-16 animateContainer"}>
      <form
        className={
          "w-full py-0 pb-8 md:py-8 lg:py-24 xl:py-28 2xl:py-32 grid gap-24"
        }
      >
        <Box className={"relative w-full grid gap-12"}>
          <div className="w-full grid max-w-[1320px] mx-auto gap-6 lg:gap-12 px-6 lg:px-0">
            <div className="col-span-1 grid grid-cols-2">
              <div>
                <h3 className="text-[23px] text-black lg:text-5xl tracking-tighter font-medium lg:leading-[52.8px]">
                  You can also add this to your booth
                </h3>
              </div>
              <div className="flex justify-end gap-5 lg:gap-10">
                <button className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent h-[30.25px] w-[30.25px] lg:h-16 lg:w-16 rounded-full border-[#504E56] text-[#504E56]">
                  <KeyboardArrowLeft className={"w-4 h-4"} />
                  <span className="sr-only">Previous slide</span>
                </button>
                <button className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent h-[30.25px] w-[30.25px] lg:h-16 lg:w-16 rounded-full border-[#504E56] text-[#504E56]">
                  <KeyboardArrowRight className={"w-4 h-4"} />
                  <span className="sr-only">Next slide</span>
                </button>
              </div>
            </div>
          </div>
          <BoothsSlider />
        </Box>
        <Box
          className={
            "w-full max-w-[1320px] mx-auto grid gap-10 lg:gap-14 px-6 lg:px-0"
          }
        >
          <h3 className="text-4xl lg:text-6xl lg:leading-[66px] tracking-[-1px] font-medium text-[#2C2A32]">
            Review your cart
          </h3>
          <Box className={"grid lg:grid-cols-9 gap-12"}>
            <Box
              className={
                "lg:col-span-6 grid gap-16 rounded-3xl bg-[#0A090B] text-[#FCFCFC] px-6 py-14 lg:px-14 lg:py-24"
              }
            >
              <CheckoutItems />
              <AddOnList />
              <DiscountCheckout />
            </Box>
          </Box>
        </Box>
      </form>
    </section>
  );
};
