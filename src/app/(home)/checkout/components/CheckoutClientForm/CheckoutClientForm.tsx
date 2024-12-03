"use client";
import { FormControl, FormGroup, Typography } from "@mui/material";
import { CountryPhoneInput } from "../../../../components/Inputs/PhoneInput";
import { CountryDropdown } from "../../../../components/Inputs/CountryDropdown";
import { CssTextField } from "../../../../(home)/checkout/components/utils";
import * as React from "react";
import {
  BillingFormSchema,
  initialValues,
  setBillingInfo, setFormErrors, setPayStackCheckoutData
} from "../../../../lib/features/checkout/checkoutSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { useFormik } from "formik";
import { initialFormData } from "@/app/(home)/exhibit/register/RegisterBoothForm";

export const CheckoutClientForm = () => {
  const [values, setValues] = useState(initialValues);
  const [country, setCountry] = useState({ label: "Nigeria", value: "Nigeria" });
  const { myTicket, total } = useAppSelector((state) => state.checkout);
  const dispatch = useAppDispatch();
  const handleInputChange = (e, name) => {
    const newState = values.map((item) => {
      if (item.name !== name.name) {
        return item;
      } else {
        if(item.name === 'Email'){
          dispatch(setPayStackCheckoutData({email: e.target.value, total: total * 100})); // store total in kobo
        }
        return {
          ...item,
          value: e.target.value,
        };
      }
    });
    const billingData = { ticket: myTicket.ticketName, data: newState };
    setValues(newState);
    dispatch(setBillingInfo(billingData));
    dispatch(setFormErrors(formik.errors));
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
  };

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
    setCountry(country);
    const billingData = { ticket: myTicket.ticketName, data: newState };
    setValues(newState);
    dispatch(setBillingInfo(billingData));
  };

  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema: BillingFormSchema,
    validateOnMount: true,
    validateOnBlur: true,
    onSubmit: async () => {
    },
  });

  return (
    <FormGroup className={"!grid lg:!grid-cols-2 !gap-5 fields"}>
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
        if (field.name === "Country") {
          return (
            <FormControl key={index} className={"space-y-2"}>
              <CountryDropdown
                key={index}
                value={country}
                onChange={(e) => handleCountryDropdownChange(e, field.name)}
              />
              {values[field.name] == "" && <Typography color={'error text-[0.75rem]'}>Select a country</Typography>}
            </FormControl>
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
            onChange={(e) => {
              formik.handleChange(e);
              handleInputChange(e, field);
            }}
            name={field.name}
            label={field.name}
            key={index}
            onBlur={(e) => {
              dispatch(setFormErrors(formik.errors));
              formik.handleBlur(e);
            }}
            error={
              formik.touched[field.name] && Boolean(formik.errors[field.name])
            }
            helperText={formik.touched[field.name] && formik.errors[field.name]}
          />
        );
      })}
    </FormGroup>
  );
};
