"use client";
import { Box } from "@mui/material";
import React, { useMemo } from "react";
import Image from "next/image";
import { SliderBoothAddOns } from "@/app/(home)/exhibit/register/SubPages/AddToBooth/Slider/slider.constants";
import { formatCurrency } from "@/app/(home)/checkout/components/utils";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks";
import {
  setAddOns,
  setAddOnTotal,
} from "@/app/lib/features/register/registerSlice";

export const BoothsSlider = () => {
  const SliderBoothAddOn = useMemo(() => Object.values(SliderBoothAddOns), []);
  const { addOnTotal, addOns } = useAppSelector((state) => state.register);
  const addOnList = useMemo(() => addOns, [addOns]);
  const dispatch = useAppDispatch();
  return (
    <Box className={"overflow-hidden"}>
      <Box
        className={"flex -ml-4"}
        style={{ transform: "translate3d(0px, 0px, 0px)" }}
      >
        {SliderBoothAddOn.map((boothAddOn, index) => {
          const handleAddon = (name: string) => {
            if (addOnList.includes(name)) {
              const newAddOns = addOns.filter((addOn) => addOn !== name);
              dispatch(setAddOns(newAddOns));
              dispatch(setAddOnTotal(addOnTotal - Number(boothAddOn.price)));
            } else {
              const newAddOns = [...addOns, name];
              dispatch(setAddOns(newAddOns));
              dispatch(setAddOnTotal(addOnTotal + Number(boothAddOn.price)));
            }
          };
          return (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/3 pl-8"
            >
              <div
                onClick={() => handleAddon(boothAddOn.name)}
                role="button"
                className={
                  "grid gap-4 border border-input transition-colors ease-linear duration-200 rounded-[calc(1rem+6px)] p-2 " +
                  (addOnList.includes(boothAddOn.name) && "border-[#504E56]")
                }
              >
                <div className="aspect-square w-full bg-[#F2F2F2] rounded-lg">
                  <Image
                    alt={boothAddOn.name}
                    loading="lazy"
                    width="380"
                    height="380"
                    decoding="async"
                    className="w-4/5 h-full max-h-full mx-auto my-auto object-center object-contain"
                    src={boothAddOn.image}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="grid grid-cols-2 text-xl text-[#2C2A32] px-2">
                  <p className="">{boothAddOn.name}</p>
                  <p className="text-right">
                    NGN {formatCurrency(Number(boothAddOn.price))}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </Box>
    </Box>
  );
};
