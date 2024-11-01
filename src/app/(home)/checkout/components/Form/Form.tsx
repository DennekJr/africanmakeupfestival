import { FormControl } from "@mui/material";
import {
  OtherOrdersFormSchema,
  initialFormValue,
  setFormValues,
  setOtherTicketsFormErrors,
  TicketBilingInfo
} from "../../../../lib/features/checkout/checkoutSlice";
import React, { useState } from "react";
import { useAppDispatch } from "../../../../lib/hooks";
import { useFormik } from "formik";
import { BillingTextField } from "@/app/(home)/checkout/components/Form/utils";

export const BillingForm = ({ ticket }: { ticket: string }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState(initialFormValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newFormData: TicketBilingInfo = {
      ...formData,
      Ticket: ticket,
      quantity: 1,
      [id]: value,
    };
    console.log('Form values', { id: ticket, data: newFormData });
    setFormData(newFormData);
    dispatch(setFormValues({ id: ticket, data: newFormData }));
    dispatch(setOtherTicketsFormErrors({ id: ticket, data: formik.errors }));
  };

  const formik = useFormik({
    initialValues: initialFormValue,
    validationSchema: OtherOrdersFormSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      id={"otherTickets"}
      name={ticket}
      onSubmit={formik.handleSubmit}
      className={"!grid lg:!grid-cols-2 !gap-5 mt-6"}
    >
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_firstName'} name={'First Name'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_lastName'} name={'Last Name'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_email'} name={'Email'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_confirmEmail'} name={'Confirm Email'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_organisation'} name={'Organisation'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_organisationWebsite'} name={'Organisation Website'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <BillingTextField id={'form_organisationRole'} name={'Organisation Role'} ticket={ticket} formik={formik} handleChange={handleChange} />
      </FormControl>
    </form>
  );
};
