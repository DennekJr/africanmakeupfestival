"use client"
import { FormControl, FormGroup } from "@mui/material";
import { CountryPhoneInput } from "../../../../components/Inputs/PhoneInput";
import { CountryDropdown } from "../../../../components/Inputs/CountryDropdown";
import { CssTextField } from "../../../../(home)/checkout/components/utils";
import * as React from "react";
import { initialValues, setBillingInfo } from "../../../../lib/features/checkout/checkoutSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";

export const CheckoutClientForm = () => {
  const [values, setValues] = useState(initialValues);
  const { myTicket } =
    useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
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
  const handlePhoneInputChange = (number, field) => {
    const newState = values.map((item) => {
      if (item.name !== field.name) {
        return item;
      } else {
        return {
          ...item,
          value: number,
        };
      }
    });
    const billingData = { ticket: myTicket.ticketName, data: newState };
    setValues(newState);
    dispatch(setBillingInfo(billingData));
  }

  const handleCountryDropdownChange = (country, name) => {
    const newState = values.map((item) => {
      if (item.name !== name) {
        return item;
      } else {
        return {
          ...item,
          value: country.label,
        };
      }
    });
    const billingData = { ticket: myTicket.ticketName, data: newState };
    setValues(newState);
    dispatch(setBillingInfo(billingData));
  }
  return <FormGroup className={"!grid lg:!grid-cols-2 !gap-5 fields"}>
    {values.map((field, index) => {
      if (field.name === "Phone Number") {
        return (
          <FormControl
            key={index}
            className={
              "space-y-2 margin-top: calc(.5rem*calc(1-0)) margin-bottom: calc(.5rem*0) rounded-[6px] border border-input "
            }
          >
            <CountryPhoneInput
              key={index}
              specialLabel={"Phone Number"}
              label={field.name}
              onChange={(number) => handlePhoneInputChange(number, field)}
            />
          </FormControl>
        );
      }
      if(field.name === "Country") {
        return <FormControl key={index} className={"space-y-2"}>
          <CountryDropdown key={index} onChange={(e) => handleCountryDropdownChange(e, field.name)} />
        </FormControl>
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
}