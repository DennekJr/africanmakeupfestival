import { CssTextField } from "@/app/(home)/checkout/components/utils";
import React from "react";

export const BillingTextField = ({id, name, ticket, formik, handleChange}:{id: string, name: string, ticket: string, formik, handleChange: (e) => void}) => {
  return <CssTextField
    className={
      "margin-top: calc(.5rem*calc(1-0))" +
      " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input [&>p]:mx-0 " +
      ticket
    }
    sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
    id={id}
    onChange={(e) => {
      formik.handleChange(e);
      handleChange(e);
    }}
    name={id}
    label={name}
    onBlur={formik.handleBlur}
    error={
      formik.touched[id] && Boolean(formik.errors[id])
    }
    helperText={formik.touched[id] && formik.errors[id]}
  />
}