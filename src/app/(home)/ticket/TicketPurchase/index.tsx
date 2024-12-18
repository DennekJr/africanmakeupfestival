"use client";
import Box from "@mui/material/Box";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, TicketBox, TicketContent, TicketTag } from "./utils";
import { FortyFiveDegreeArrow } from "../../../(home)/sponsor/Hero/utils";
import { TICKETPURCHASEMENU } from "./ticketPurchase.constants";
import {
  setTickets,
  setBillingTotal, setValidatedCode
} from "../../../lib/features/checkout/checkoutSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  CssTextField,
  formatCurrency,
  getTicketCost
} from "@/app/(home)/checkout/components/utils";
import { AgoraBox } from "@/app/(home)/components/newHome/utils";
import { checkInviteCode } from "@/app/(home)/checkout/components/ExternalApiCalls/ExternalApiCalls";
import { FormGroup } from "@mui/material";
import { ValidateCodeButton } from "@/app/utils";
import "../../checkout/components/checkout.module.css";

export const TicketPurchase = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [limitError, setLimitError] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [inviteCodeError, setInviteCodeError] = useState("");
  const { tickets: ticketNumbers, total } = useAppSelector(
    (state) => state.checkout
  );
  const values = useMemo(() => ticketNumbers, [ticketNumbers]);
  const router = useRouter();
  const tickets = useMemo(() => Object.values(TICKETPURCHASEMENU), []);
  const dispatch = useAppDispatch();

  const handleChange = (math: string, id: string) => {
    setError("");
    setLimitError("");
    const count = values.reduce((acc, ticket) => {
      return acc + ticket.value;
    }, 0);
    if (count === 3 && math === "plus") {
      setLimitError("You can only purchase up to 3 tickets at a time.");
      setTimeout(() => {
        setLimitError("");
      }, 3000);
      return;
    }
    const newState = values.map((ticketValue) => {
      if (ticketValue.ticketName !== id) {
        return ticketValue;
      } else {
        const newValue =
          math === "plus"
            ? ticketValue.value + 1
            : ticketValue.value > 0
              ? ticketValue.value - 1
              : ticketValue.value;
        return {
          ...ticketValue,
          value: newValue,
        };
      }
    });
    const newTotal = Object.values(newState).reduce((acc, ticket) => {
      if (ticket.value < 1) return acc;

      const value = getTicketCost(ticket);

      return acc + value;
    }, 0);
    dispatch(setTickets(newState));
    dispatch(setBillingTotal(newTotal));
  };

  const handleProceedToCheckout = () => {
    const hasAddedTicket = values.some((ticket) => ticket.value > 0);
    if (hasAddedTicket) {
      router.push("/checkout");
    } else {
      setError("Please select ticket(s) to proceed to checkout");
    }
  };
  const handleInviteCodeCheck = async () => {
    setLoading(true);
    const result = await checkInviteCode(inviteCode);
    if (result) {
      dispatch(setValidatedCode(result.code));
      const newState = values.map((ticketValue) => {
        if (ticketValue.ticketName !== result.ticketType.toLowerCase()) {
          return { ticketName: ticketValue.ticketName, value: 0 };
        } else {
          const newValue = 1;
          return {
            ...ticketValue,
            value: newValue
          };
        }
      });
      const newTotal = 0;
      dispatch(setTickets(newState));
      dispatch(setBillingTotal(newTotal));
      setTimeout(() => {
        setLoading(false);
        router.push("/checkout");
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
        setInviteCodeError("Invalid invite code");
      }, 500);
    }
  };
  return (
    <Box>
      <Box className={"text-black px-8 bg-textColor rounded-2xl py-4 my-4"}>
        <Box className={"flex flex-col"}>
          <span className={"text-xl lg:text-2xl xl:text-3xl"}>Were you invited?</span>
          <span className={"text-lightSecondary my-2"}>Validate your tickets</span>
        </Box>
        <FormGroup
          className={"text-lightSecondary flex !flex-row fields inputColor"}
        >
          <CssTextField
            size="medium"
            required
            value={inviteCode}
            onChange={(e) => {
              setInviteCode(e.target.value);
            }}
            className="w-full sm:w-[68%] !my-4 py-[10px] border-lightSecondary !outline-none !text-black placeholder:!text-lightSecondary sm:!mr-2"
            style={{
              boxShadow: "0 15px 15px -14px rgba(0, 0, 0, 0.01)",
              color: "#000"
            }}
            sx={{
              color: "#000"
              // backgroundColor: "#000",
            }}
            slotProps={{
              input: {
                disableUnderline: true
              }
            }}
            placeholder={"Invite Code"}
            type={"text"}
            name={"Invite Code"}
            helperText={inviteCodeError}
            error={Boolean(inviteCodeError)}
          />
          <ValidateCodeButton loading={loading} onClick={handleInviteCodeCheck} name={"Validate"} />
        </FormGroup>
      </Box>
      <TicketBox>
        <TicketContent className={""}>
          {tickets.map((ticket, index) => {
            const ticketNumber = values.find((item) => {
              if (item.ticketName === ticket.id) {
                return item.value;
              }
              return 0;
            });
            return (
              <Box
                key={index}
                className={
                  "bg-textColor rounded-2xl border-b border-dashed border-lightGrey py-10 lg:py-16 p-8 lg:p-8 space-y-6" +
                  `${index === tickets.length - 1 ? "" : " border-b-[8px]"}`
                }
              >
                <Box className="space-y-2 lg:space-y-4">
                  <Box className="flex flex-col-reverse lg:grid grid-cols-5 gap-2">
                    <Box className="col-span-4 space-y-1">
                      <p className="text-2xl lg:text-3xl xl:text-6xl font-medium text-black">
                        {ticket.title}
                      </p>
                      <p className="text-sm lg:text-base text-lightSecondary">
                        {ticket.subTitle}
                      </p>
                    </Box>
                    <TicketTag ticket={ticket} />
                  </Box>
                  <Box className={"!mt-2"}>
                    <Box
                      className="list-disc text-lightSecondary pt-2"
                      style={{ position: "relative" }}
                    >
                      <Box className={"flex flex-col pt-2 text-sm leading-8"}>
                        {ticket.benefits.map((benefit, index) => {
                          return <li key={index}>{benefit}</li>;
                        })}
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className="space-y-4 flex items-center justify-between">
                  <div className="flex gap-4 lg:gap-6">
                    <p className="text-2xl lg:text-3xl xl:text-5xl text-black font-medium">
                      {ticket.price}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-5 !mt-0">
                    <Minus
                      handleClick={() => handleChange("minus", ticket.id)}
                    />
                    <p className="text-2xl lg:text-3xl xl:text-5xl font-medium text-black">
                      {ticketNumber?.value ?? 0}
                    </p>
                    <Plus handleClick={() => handleChange("plus", ticket.id)} />
                  </div>
                </Box>
              </Box>
            );
          })}
        </TicketContent>
      </TicketBox>
      <Box className={"my-8 flex"}>
        {ticketNumbers.map((ticket, index) => {
          return (
            <Box
              key={index}
              className={
                "bg-textColor text-lightSecondary mr-4 p-4 rounded-2xl"
              }
            >
              <span>{ticket.ticketName.toUpperCase()}</span>
              <span
                className={"ml-2 text-primary p-1 px-2 bg-pink rounded-2xl"}
              >
                {ticket.value}
              </span>
            </Box>
          );
        })}
      </Box>
      <Box className="py-2 lg:py-4 flex flex-col justify-center bg-textColor rounded-2xl">
        <AgoraBox className="transition-all text-center text-warning text-lg font-medium">
          {error}
        </AgoraBox>
        <AgoraBox className="swiper-fade transition-all text-center text-warning text-lg font-medium">
          {limitError}
        </AgoraBox>
        <Box
          className={
            "flex flex-col items-center gap-4 lg:flex-row justify-between p-5 lg:p-8 font-medium text-black"
          }
        >
          <Box
            className={"flex flex-col gap-2 text-2xl lg:text-3xl xl:text-5xl"}
          >
            <span className="text-lightSecondary">Total</span>
            <span>NGN&nbsp;{formatCurrency(total)}</span>
          </Box>
          <button
            onClick={handleProceedToCheckout}
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-textColor hover:bg-primary/90 h-14 px-6 py-4 rounded-full"
          >
            <span>PROCEED TO CHECK OUT</span>
            <FortyFiveDegreeArrow />
          </button>
        </Box>
      </Box>
    </Box>
  );
};
