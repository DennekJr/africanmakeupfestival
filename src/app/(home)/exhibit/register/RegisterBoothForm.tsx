"use client";
import * as React from "react";
import {
  CssSelectField,
  CssTextField,
} from "../../../(home)/checkout/components/utils";
import { FormControl, FormGroup, MenuItem, SelectChangeEvent } from "@mui/material";
import { useMemo, useState } from "react";
import { REGISTERFORMMENU } from "../../../(home)/exhibit/register/register.constants";
import { useAppDispatch } from "../../../lib/hooks";
import {
  ExhibitionBoothBillingInfo,
  setFormValues,
} from "../../../lib/features/exhibition/exhibitionSlice";
import { CountryPhoneInput } from "../../../components/Inputs/PhoneInput";
import { CountryDropdown } from "../../../components/Inputs/CountryDropdown";

export const RegisterBoothForm = () => {
  const formFields = useMemo(() => Object.values(REGISTERFORMMENU), []);
  const [formData, setFormData] = useState({
    form_booth: "",
    form_companyName: "",
    form_contactName: "",
    form_jobTitle: "",
    form_phoneNumber: "",
    form_country: "",
    form_email: "",
    form_industry: "",
    form_briefDescription: "",
    form_howDidYouHearAboutEvent: "",
  });
  const [booth, setBooth] = useState("");
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      [id]: value,
    };
    setFormData(newFormData);
    dispatch(setFormValues({ booth: id, data: newFormData }));
  };
  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as string;
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      ['form_booth']: value,
    };
    setBooth(value);
    setFormData(newFormData);
    dispatch(setFormValues({ booth: value, data: newFormData }));
  };
  const handlePhoneInputChange = (phoneNumber, id) => {
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      [id]: phoneNumber,
    };
    setFormData(newFormData);
    dispatch(setFormValues({ id: id, data: newFormData }));
  };

  const handleCountryDropdownChange = (e, id) => {
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      [id]: e.label,
    };
    setFormData(newFormData);
    dispatch(setFormValues({ id: id, data: newFormData }));
  };
  return (
    <FormGroup className={"space-y-8"}>
      {formFields.map((field, index) => {
        if (field.fieldType === "Select") {
          return (
            <FormControl key={`${index}-${field.id}`} className={"space-y-2"}>
              <label
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]"
                htmlFor="selectBooth"
              >
                {field.formField}
              </label>
              <CssSelectField
                id={field.id}
                sx={{
                  input: {
                    color: "#1E1C21",
                    borderColor: "#D0D4DD",
                  },
                }}
                className={'text-[#1E1C21] [&>div]:text-[#1E1C21]'}
                value={booth}
                onChange={(e) => handleSelectChange(e)}
              >
                <MenuItem
                  key={`90${index}-${field.id}1`}
                  className={"capitalize"}
                  value={"OASIS (3x3) NGN 850,000"}
                >
                  {"OASIS (3x3) NGN 850,000"}
                </MenuItem>
                <MenuItem
                  key={`98${index}-${field.id}2`}
                  className={"capitalize"}
                  value={"NEXT GEN (3x3) NGN 1,200,000"}
                >
                  {"NEXT GEN (3x3) NGN 1,200,000"}
                </MenuItem>
              </CssSelectField>
            </FormControl>
          );
        }
        if (field.fieldType === "Phone Number") {
          return (
            <FormControl key={`${index}-${field.id}`} className={"space-y-2"}>
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]">
                {field.formField}
              </label>
              <CountryPhoneInput
                key={index}
                id={field.id}
                specialLabel={"Phone Number"}
                label={field.formField}
                onChange={(e) => handlePhoneInputChange(e, field.id)}
              />
            </FormControl>
          );
        }
        if (field.fieldType === "Country") {
          return (
            <FormControl key={`${index}-${field.id}`} className={"space-y-2"}>
              <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]">
                {field.formField}
              </label>
              <CountryDropdown
                key={index}
                onChange={(e) => handleCountryDropdownChange(e, field.id)}
              />
            </FormControl>
          );
        }
        return (
          <FormControl key={`${index}-${field.id}`} className={"space-y-2"}>
            <CssTextField
              className={
                "margin-top: calc(.5rem*calc(1-0))" +
                " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input "
              }
              sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
              id={field.id}
              onChange={handleChange}
              name={field.formField}
              label={field.formField}
            />
          </FormControl>
        );
      })}
    </FormGroup>
  );
};
