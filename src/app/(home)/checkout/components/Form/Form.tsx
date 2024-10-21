import { FormControl } from "@mui/material";
import { setFormValues, TicketBilingInfo } from "../../../../lib/features/checkout/checkoutSlice";
import React, { useState } from "react";
import { useAppDispatch } from "../../../../lib/hooks";
import { CssTextField } from "@/app/(home)/checkout/components/utils";

export const BillingForm = ({ ticket }: { ticket: string }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    form_firstName: "",
    form_lastName: "",
    form_email: "",
    form_confirmEmail: "",
    form_organisation: "",
    form_organisationWebsite: "",
    form_organisationRole: "",
    Ticket: "Delegate", // Default ticket type
    quantity: 1,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newFormData: TicketBilingInfo = {
      ...formData,
      Ticket: ticket,
      quantity: 1,
      [id]: value,
    };
    console.log("New Form Data", newFormData);
    setFormData(newFormData);
    dispatch(setFormValues({ id: ticket, data: newFormData }));
  };
  return (
    <form
      id={"otherTickets"}
      name={ticket}
      className={"!grid lg:!grid-cols-2 !gap-5 mt-6"}
    >
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_firstName"}
          onChange={handleChange}
          name={"First Name"}
          label={"First Name"}
        />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_lastName"}
          onChange={handleChange}
          name={"Last Name"}
          label={"Last Name"}
        />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_Email"}
          onChange={handleChange}
          name={"Email"}
          label={"Email"}
        />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_confirmEmail"}
          onChange={handleChange}
          name={"Confirm Email"}
          label={"Confirm Email"}
        />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_organisation"}
          onChange={handleChange}
          name={"Organisation"}
          label={"Organisation"}
        />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_organisationWebsite"}
          onChange={handleChange}
          name={"Organisation Website"}
          label={"Organisation Website"}
        />
      </FormControl>
      <FormControl className={"space-y-2"}>
        <CssTextField
          className={
            "margin-top: calc(.5rem*calc(1-0))" +
            " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input " +
            ticket
          }
          sx={{ input: { color: "#1E1C21", borderColor: "#D0D4DD" } }}
          id={"form_organisationRole"}
          onChange={handleChange}
          name={"Organisation Role"}
          label={"Organisation Role"}
        />
      </FormControl>
    </form>
  );
};
