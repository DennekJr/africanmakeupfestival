"use client";
import * as React from "react";
import {
  CssSelectField,
  CssTextField,
} from "../../../(home)/checkout/components/utils";
import {
  FormControl,
  FormGroup,
  MenuItem,
  SelectChangeEvent, Typography
} from "@mui/material";
import { useMemo, useState } from "react";
import { REGISTERFORMMENU } from "../../../(home)/exhibit/register/register.constants";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import {
  ExhibitionBoothBillingInfo,
  ExhibitionFormSchema,
  setFormValues,
  setTotal,
} from "../../../lib/features/exhibition/exhibitionSlice";
import { CountryPhoneInput } from "../../../components/Inputs/PhoneInput";
import { CountryDropdown } from "../../../components/Inputs/CountryDropdown";
import { useFormik } from "formik";
import { PaynowAndPrivacyPolicy } from "@/app/(home)/exhibit/register/PaynowAndPrivacyPolicy";
import { Label, postBooth } from "@/app/(home)/exhibit/register/utils";
import { useRouter } from "next/navigation";

export const initialFormData = {
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
};

export const RegisterBoothForm = () => {
  const formFields = useMemo(() => Object.values(REGISTERFORMMENU), []);
  const [formData, setFormData] = useState(initialFormData);
  const [booth, setBooth] = useState("");
  const dispatch = useAppDispatch();
  const { formValues, total } = useAppSelector((state) => state.exhibition);
  const navigate = useRouter();
  const dataPlusCost = {
    buyerDetails: formValues,
    boothCost: total,
  };

  const formik = useFormik({
    initialValues: initialFormData,
    validationSchema: ExhibitionFormSchema,
    onSubmit: async () => {
      postBooth(dataPlusCost).then(() => navigate.push('/'));
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      [id]: value,
    };
    setFormData(newFormData);
    dispatch(setFormValues({ booth: booth, data: newFormData }));
  };
  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as string;
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      ["form_booth"]: value,
    };
    setBooth(value);
    const priceWithComma = value.split(" ").pop();
    const price = Number(priceWithComma?.replace(/,/g, ""));
    setFormData(newFormData);
    dispatch(setTotal(price));
    dispatch(setFormValues({ booth: value, data: newFormData }));
  };
  const handlePhoneInputChange = (phoneNumber, id) => {
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      [id]: phoneNumber,
    };
    setFormData(newFormData);
    dispatch(setFormValues({ booth: booth, data: newFormData }));
  };

  const handleCountryDropdownChange = (e, id) => {
    const newFormData: ExhibitionBoothBillingInfo = {
      ...formData,
      [id]: e.label,
    };
    setFormData(newFormData);
    dispatch(setFormValues({ booth: booth, data: newFormData }));
  };

  const handlePayment = () => {
    // if(formik.errors){
    // }
  };
  return (
    <form onSubmit={formik.handleSubmit} className={"space-y-8"}>
      <FormGroup className={"space-y-8"}>
        {formFields.map((field, index) => {
          if (field.fieldType === "Select") {
            return (
              <FormControl
                required
                key={`${index}-${field.id}`}
                className={"space-y-2"}
              >
                <Label label={field.formField} />
                <CssSelectField
                  displayEmpty
                  id={field.id}
                  sx={{
                    input: {
                      color: "#1E1C21",
                      borderColor: "#D0D4DD",
                    },
                  }}
                  MenuProps={{
                    sx: {
                      "&& .MuiList-root": {
                        color: "black",
                        backgroundColor: "white",
                      },
                    },
                  }}
                  className={"text-[#1E1C21] [&>div]:text-[#1E1C21]"}
                  value={booth}
                  onChange={(e) => handleSelectChange(e)}
                  name={field.id}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[field.id] && Boolean(formik.errors[field.id])
                  }
                >
                  <MenuItem
                    key={`90${index}-${field.id}1`}
                    className={"capitalize  hover:!bg-gray-100"}
                    value={"OASIS (3x3) NGN 850,000"}
                  >
                    {"OASIS (3x3) NGN 850,000"}
                  </MenuItem>
                  <MenuItem
                    key={`98${index}-${field.id}2`}
                    className={"capitalize  hover:!bg-gray-100"}
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
              <FormControl
                required
                key={`${index}-${field.id}`}
                className={"space-y-2"}
                error={true}
              >
                <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base leading-[22.4px] font-normal text-[#1E1C21]">
                  {field.formField}
                </label>
                <CountryPhoneInput
                  key={index}
                  id={field.id}
                  specialLabel={"Phone Number"}
                  label={field.formField}
                  onChange={(e) => {
                    handlePhoneInputChange(e, field.id);
                  }}
                  name={field.id}
                  defaultErrorMessage="Phone number is not valid"
                />
              </FormControl>
            );
          }
          if (field.fieldType === "Country") {
            return (
              <FormControl
                required
                key={`${index}-${field.id}`}
                className={"space-y-2"}
              >
                <Label label={field.formField} />
                <CountryDropdown
                  key={index}
                  onChange={(e) => handleCountryDropdownChange(e, field.id)}
                />
                {formData[field.id] == "" && <Typography color={'error text-[0.75rem]'}>Select a country</Typography>}
              </FormControl>
            );
          }
          if (field.id === "form_briefDescription") {
            return (
              <FormControl
                required
                key={`${index}-${field.id}`}
                className={"space-y-2"}
              >
                <Label label={field.formField} />
                <CssTextField
                  className={
                    "margin-top: calc(.5rem*calc(1-0))" +
                    " margin-bottom: calc(.5rem*0) rounded-[6px] outline-[0] border border-input [&>p]:mx-0 text-[#1E1C21] py-[16px] px-[14px]"
                  }
                  sx={{
                    input: { color: "#1E1C21", borderColor: "#D0D4DD" }
                  }}
                  id={field.id}
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleChange(e);
                  }}
                  multiline={true}
                  minRows={4}
                  name={field.id}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched[field.id] && Boolean(formik.errors[field.id])
                  }
                  helperText={
                    formik.touched[field.id] && formik.errors[field.id]
                  }
                />
              </FormControl>
            );
          }
          return (
            <FormControl
              required
              key={`${index}-${field.id}`}
              className={"space-y-2"}
            >
              <Label label={field.formField} />
              <CssTextField
                className={
                  "margin-top: calc(.5rem*calc(1-0))" +
                  " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input [&>p]:mx-0 text-[#1E1C21]"
                }
                sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
                id={field.id}
                onChange={(e) => {
                  formik.handleChange(e);
                  handleChange(e);
                }}
                name={field.id}
                onBlur={formik.handleBlur}
                error={
                  formik.touched[field.id] && Boolean(formik.errors[field.id])
                }
                helperText={formik.touched[field.id] && formik.errors[field.id]}
              />
            </FormControl>
          );
        })}
      </FormGroup>
      <PaynowAndPrivacyPolicy handlePayment={handlePayment} />
    </form>
  );
};
