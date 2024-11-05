"use client";
import { useAppSelector } from "@/app/lib/hooks";
import { RegisterBooth } from "@/app/(home)/exhibit/register/SubPages/RegisterBooth";
import { AddToBooth } from "@/app/(home)/exhibit/register/SubPages/AddToBooth";
import { BoothCheckout } from "@/app/(home)/exhibit/register/SubPages/BoothCheckout";
import { useEffect, useMemo } from "react";

export const SubPages = () => {
  const { subPage } = useAppSelector((state) => state.register);
  const booth = useMemo(() => subPage, [subPage]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (booth === "addToBooth" || booth === "payment") {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, [booth]);
  if (booth === "addToBooth") return <AddToBooth />;
  if (booth === "payment") return <BoothCheckout />;
  return <RegisterBooth />;
};
