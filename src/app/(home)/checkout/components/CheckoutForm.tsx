"use client";
import * as React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, FormGroup } from "@mui/material";
import { useEffect, useState } from "react";
import "./checkout.module.css";
import { HiddenFormDropdown } from "../../../(home)/checkout/components/hiddenFormDropdown/hiddenFormDropdown";
import { CssTextField } from "../../../(home)/checkout/components/utils";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  DelegateTicket,
  ExplorerTicket,
  FounderTicket,
  InvestorTicket,
  setBillingInfo
} from "../../../lib/features/checkout/checkoutSlice";
// import PaystackPop from '@paystack/inline-js';


export const CheckoutForm = () => {
  const initialValues = [
    { name: "First Name", value: "" },
    { name: "Last Name", value: "" },
    { name: "Phone Number", value: "" },
    { name: "Country", value: "" },
    { name: "Email", value: "" },
    { name: "Confirm Email", value: "" },
    { name: "Organisation", value: "" },
    { name: "Organisation Website", value: "" },
    { name: "Organisation Role", value: "" },
    { name: "How did you hear about the event", value: "" },
  ];
  const [values, setValues] = useState(initialValues);
  const router = useRouter();
  const { tickets, myTicket, total, billingInfo, leftOverTickets } = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const currentValues = Object.values(tickets).filter(
      (ticket) => ticket.value > 0,
    );
    if (currentValues.length === 0) {
      router.push("/ticket");
    }
  }, []);

  const handleInputChange = (e, name) => {
    const newState = values.map((item) => {
      if (item.name !== name.name) {
        return item;
      } else {
        return {
          ...item,
          value: e.target.value,
        };
      }
    });
    const billingData = { ticket: myTicket.ticketName, data: newState };
    setValues(newState);
    dispatch(setBillingInfo(billingData));
  };

  const postTicket = async (ticketData) => {
    try {
      const response = await fetch('/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData), // Stringify the object
      });

      console.log('response from api', response);

      const data = await response.json(); // Parse the JSON response
      if (response.ok) {
        console.log('Ticket posted successfully:', data);
      } else {
        console.error('Error posting ticket:', data);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  };
  const initiatePaystackTransaction = async () => {
    try {
      const response = await fetch('/api/paystack', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'customer@email.com', // Replace with actual customer email
          amount: 500000, // Amount in kobo (Paystack uses kobo for amounts)
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Transaction initialized:', data);
        // Redirect user to the Paystack payment URL using data.transactionData.accessCode
      } else {
        console.error('Error initializing transaction:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    initiatePaystackTransaction().then((e) => console.log('Result of paystack call', e));
    postTicket({ billingInfo: billingInfo, leftOverTickets: leftOverTickets }).then((e) => console.log("Post call" + e));
  };

  return (
    <Box
      className={
        "max-w-[1320px] py-8 md:py-14 lg:py-20 xl:py-28 2xl:py-32 mx-auto space-y-12 lg:space-y-16 2xl:space-y-24"
      }
    >
      <Box
        className={
          "w-full mt-16 grid lg:grid-cols-11 px-6 xl:px-0 space-y-12 lg:space-y-0"
        }
      >
        <Box className={"lg:col-span-6 space-y-8"}>
          <Box className={"space-y-3"}>
            <Box
              className={"flex items-center gap-3"}
              onClick={() => router.push("/ticket")}
            >
              <button
                className={
                  "inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap rounded-[calc(1rem-2px)] text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-transparent border-[#504E56] text-[#504E56] size-6"
                }
              >
                <ArrowBackIosIcon
                  className={
                    "m-0 p-0 !w-[0.5rem] !h-[0.5rem] !block align-middle"
                  }
                />
              </button>
              <p className="text-[#7F7D82] cursor-default">
                Go back to tickets
              </p>
            </Box>
            <p className="text-4xl xl:text-5xl 2xl:text-6xl font-medium">
              Billing Information
            </p>
          </Box>
          <Box className={"space-y-5"}>
            <FormGroup className={"!grid lg:!grid-cols-2 !gap-5 fields"}>
              {values.map((field, index) => {
                if (field.name === "Phone Number") {
                  return (
                    <CssTextField
                      className={
                        "margin-top: calc(.5rem*calc(1-0))" +
                        " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input"
                      }
                      sx={{
                        input: { color: "#1E1C21", borderColor: "#D0D4DD" },
                      }}
                      value={field.value}
                      onChange={(e) => handleInputChange(e, field)}
                      name={field.name}
                      label={field.name}
                      key={index}
                    />
                  );
                }
                return (
                  <CssTextField
                    className={
                      "margin-top: calc(.5rem*calc(1-0))" +
                      " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input"
                    }
                    sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
                    value={field.value}
                    onChange={(e) => handleInputChange(e, field)}
                    name={field.name}
                    label={field.name}
                    key={index}
                  />
                );
              })}
            </FormGroup>
            {/*</Box>*/}
          </Box>
        </Box>
        <Box className="hidden lg:block lg:col-start-8 lg:col-span-4 space-y-8">
          <Box className="space-y-6">
            <p className="text-[#0A090B] text-4xl xl:text-5xl 2xl:text-6xl !font-medium">
              Summary
            </p>
            <div className="border-y border-[#7F7D82] space-y-2 py-3">
              {Object.values(tickets).map((ticket, index) => {
                if (ticket.value < 1) return;
                const value =
                  ticket.ticketName === "investor"
                    ? InvestorTicket * ticket.value
                    : ticket.ticketName === "founder"
                      ? FounderTicket * ticket.value
                      : ticket.ticketName === "explorer"
                        ? ExplorerTicket * ticket.value
                        : DelegateTicket * ticket.value;
                return (
                  <div
                    key={index}
                    className="flex justify-between gap-4 text-[#0A090B]"
                  >
                    <p className="text-[#0A090B] font-medium">
                      {ticket.value}x {ticket.ticketName.toUpperCase()}
                    </p>
                    <p>NGN {value}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-[#0A090B] flex justify-between text-lg">
              <p>Total</p>
              <p className="font-medium">NGN {total}</p>
            </div>
          </Box>
          <button
            onClick={handleSubmit}
            type={"submit"}
            form={"otherTickets"}
            className="inline-flex items-center justify-center gap-3 ease-in-out duration-500 whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 !bg-[#0A090B] text-gray-100 hover:bg-[$0A090B]/90 h-14 px-6 py-4 rounded-full relative w-full"
          >
            <span className="text-center w-full h-full">
              CONTINUE TO PAYMENT
            </span>
          </button>
        </Box>
      </Box>
      <HiddenFormDropdown
        title={"Select the ticket that belongs to you."}
        subTitle={
          "Tickets will only be assigned to the email address(es) you provide"
        }
        displayTicketDropdown={true}
      />
      <HiddenFormDropdown
        title={"Assign other tickets to different e-mail addresses?"}
        subTitle={
          "Tickets will only be assigned to the email address(es) you provide"
        }
        displayTicketDropdown={false}
      />
    </Box>
  );
};
