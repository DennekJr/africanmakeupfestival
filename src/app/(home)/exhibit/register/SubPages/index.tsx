"use client"
import { useAppSelector } from "@/app/lib/hooks";
import { RegisterBooth } from "@/app/(home)/exhibit/register/SubPages/RegisterBooth";
import { AddToBooth } from "@/app/(home)/exhibit/register/SubPages/AddToBooth";
import { BoothCheckout } from "@/app/(home)/exhibit/register/SubPages/BoothCheckout";
import { useEffect, useMemo } from "react";
import { useElements } from "@stripe/react-stripe-js";

export const SubPages = () => {
  useEffect(() => {
    if(document){
      document.getElementById("pageTop").scrollIntoView({ behavior: "smooth" });
    }
  }, [])
  const { subPage } = useAppSelector((state) => state.register);
  const booth = useMemo(() => subPage, [subPage]);
  if(booth === 'addToBooth')return <AddToBooth />
  if(booth === 'payment') return <BoothCheckout />
  else return <RegisterBooth />
}