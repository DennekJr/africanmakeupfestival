import { FormControl, InputLabel, Input } from "@mui/material";
import {
  setFormValues
} from "../../../../lib/features/checkout/checkoutSlice";
import React, { useState } from "react";
import { useAppDispatch } from "../../../../lib/hooks";

const StyledInput = ({ id, onChange, className }:{id: string, className: string, onChange: (e) => void}) => {
  return <Input onChange={onChange} id={id} aria-describedby="my-helper-text" className={
    "margin-top: calc(.5rem*calc(1-0))" +
    " margin-bottom: calc(.5rem*0) rounded-[6px] border border-input "+ className
  }
         sx={{
           input: {
             color: "#1E1C21",
             borderColor: "#D0D4DD",
           },
         }} />
};

type TicketBilingInfo = {
  form_firstName: string;
  form_lastName: string;
  form_email: string;
  form_confirmEmail: string;
  form_organisation: string;
  form_organisationWebsite: string;
  form_organisationRole: string;
  Ticket: string;
  quantity: number;
};
export const BillingForm = ({ticket}:{ticket: string}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
      form_firstName: '',
      form_lastName: '',
      form_email: '',
      form_confirmEmail: '',
      form_organisation: '',
      form_organisationWebsite: '',
      form_organisationRole: '',
      Ticket: 'Delegate', // Default ticket type
      quantity: 1,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const newFormData:TicketBilingInfo = {
      ...formData,
      Ticket: ticket,
      quantity: 1,
      [id]: value
    };
    setFormData(newFormData);
    dispatch(setFormValues({ id: ticket, data: newFormData }));
  }
  return (
    <form id={'otherTickets'} name={ticket}>
      <FormControl>
        <InputLabel htmlFor="form_firstName" sx={{color: '#1E1C21'}}>First Name</InputLabel>
        <StyledInput onChange={handleChange} id={'form_firstName'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_lastName">Last Name</InputLabel>
        <StyledInput onChange={handleChange} id={'form_lastName'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_phoneNumber">Phone Number</InputLabel>
        <StyledInput onChange={handleChange} id={'form_phoneNumber'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_Email">Email</InputLabel>
        <StyledInput onChange={handleChange} id={'form_Email'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_confirmEmail">Confirm Email</InputLabel>
        <StyledInput onChange={handleChange} id={'form_confirmEmail'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_organisation">Organisation</InputLabel>
        <StyledInput onChange={handleChange} id={'form_organisation'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_organisationWebsite">
          Organisation Website
        </InputLabel>
        <StyledInput onChange={handleChange} id={'form_organisationWebsite'} className={ticket} />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="form_organisationRole">
          Organisation Role
        </InputLabel>
        <StyledInput onChange={handleChange}
                     id={'form_organisationRole'} className={ticket} />
      </FormControl>
    </form>
  );
};
