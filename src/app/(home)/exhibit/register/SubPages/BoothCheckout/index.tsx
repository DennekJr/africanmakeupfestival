import { Box, FormControlLabel, Radio } from "@mui/material";
import Image from "next/image";
import { Summary } from "@/app/(home)/exhibit/register/SubPages/BoothCheckout/Summary";
import "../subpages.styles.css";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import { setPaymentMethod } from "@/app/lib/features/register/registerSlice";
import dynamic from "next/dynamic";

const DiscountCheckout = dynamic(() => import('../AddToBooth/DiscountCheckout'), { ssr: false });

export const BoothCheckout = () => {
  const { paymentMethod } = useAppSelector((state) => state.register);
  const dispatch = useAppDispatch();
  return (
    <section id={"pageTop"} className={"w-full mt-16 animateContainer"}>
      <form
        className={
          "w-full py-0 pb-8 md:py-8 lg:py-24 xl:py-28 2xl:py-32 grid gap-24"
        }
      >
        <Box
          className={"w-full max-w-[1320px] mx-auto grid gap-6 lg:gap-14 px-6 "}
        >
          <h3 className="text-6xl text-black leading-[66px] tracking-[-1px] font-medium">
            Checkout
          </h3>
          <Box
            className={
              "flex flex-col-reverse lg:px-0 lg:grid lg:grid-cols-9 gap-12"
            }
          >
            <Box
              className={
                "col-span-6 grid gap-16 rounded-3xl bg-[#0A090B] text-[#FCFCFC] px-6 py-14 lg:px-14 lg:py-24"
              }
            >
              <Box className="grid gap-2">
                <h3 className="text-5xl tracking-[-1px] font-medium">
                  Choose payment method
                </h3>
                <p>(All fields are required)</p>
              </Box>
              <Box className="space-y-3" style={{ position: "relative" }}>
                <div
                  role="radiogroup"
                  className="gap-2 flex flex-col space-y-5"
                  style={{ outline: "none" }}
                >
                  <div
                    onClick={() => dispatch(setPaymentMethod("paystack"))}
                    className="space-y-2 flex rounded-2xl px-6 py-12 border border-[#2C2A32]"
                    style={{ position: "relative" }}
                  >
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#FCFCFC] text-base leading-[22.4px] font-normal flex justify-between flex-1">
                      <div
                        className="flex items-center space-x-3 space-y-0 "
                      >
                        <FormControlLabel
                          value="Paystack"
                          control={
                            <Radio
                              className={"!text-white"}
                              checked={paymentMethod === "paystack"}
                            />
                          }
                          label={""}
                        />
                        <input
                          type="radio"
                          value="PAYSTACK"
                          style={{
                            transform: "translateX(-100%)",
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: "0px",
                            width: "16px",
                            height: "16px",
                          }}
                        />
                        <span>Paystack</span>
                      </div>
                      <Image
                        alt="paystack"
                        loading="lazy"
                        width={271}
                        height={48}
                        decoding="async"
                        className="w-32 lg:w-64"
                        src="/images/paystack.svg"
                        style={{ color: "transparent" }}
                      />
                    </label>
                  </div>
                  <div
                    className="space-y-2 flex rounded-2xl px-6 py-12 border border-[#2C2A32]"
                    style={{ position: "relative" }}
                    onClick={() => dispatch(setPaymentMethod("stripe"))}
                  >
                    <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#FCFCFC] text-base leading-[22.4px] font-normal flex flex-col space-y-2.5 flex-1">
                      <div className="flex justify-between flex-1">
                        <div
                          className="flex items-center space-x-3 space-y-0 "
                        >
                          <FormControlLabel
                            value="Stripe"
                            control={
                              <Radio
                                className={"!text-white"}
                                // onClick={() => console.log("clicked")}
                                checked={paymentMethod === "stripe"}
                              />
                            }
                            label={""}
                          />
                          <input
                            type="radio"
                            value="Stripe"
                            style={{
                              transform: "translateX(-100%)",
                              position: "absolute",
                              pointerEvents: "none",
                              opacity: 0,
                              margin: "0px",
                              width: "16px",
                              height: "16px",
                            }}
                          />
                          <span>Stripe</span>
                        </div>
                        <Image
                          alt="stripe"
                          loading="lazy"
                          width={271}
                          height={48}
                          decoding="async"
                          data-nimg="1"
                          className="w-32 lg:w-64"
                          src="/images/stripe.svg"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </Box>
              <DiscountCheckout />
            </Box>
            <Summary />
          </Box>
        </Box>
      </form>
    </section>
  );
};
