import { createSlice } from "@reduxjs/toolkit";
import * as Yup from "yup";

export type TicketBilingInfo = {
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

export const OtherOrdersFormSchema = Yup.object().shape({
  form_firstName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  form_lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  form_confirmEmail: Yup.string()
    .oneOf([Yup.ref('form_email')], 'Email must match')
    .required("Required"),
  form_organisation: Yup.string()
    .required("Required"),
  form_organisationWebsite: Yup.string()
    .required("Required"),
  form_organisationRole: Yup.string()
    .required("Required"),
  form_email: Yup.string().email("Invalid email").required("Required"),
});
export const BillingFormSchema = Yup.object().shape({
  'First Name': Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  'Last Name': Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  'Confirm Email': Yup.string()
    .oneOf([Yup.ref('Email')], 'Email must match')
    .required("Required"),
  'Organisation': Yup.string()
    .required("Required"),
  'Organisation Website': Yup.string()
    .required("Required"),
  'Organisation Role': Yup.string()
    .required("Required"),
  'How did you hear about the event': Yup.string()
    .required("Required"),
  'Email': Yup.string().email("Invalid email").required("Required"),
});

export const initialValues = [
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

export const initialFormValue = {
  form_firstName: "",
  form_lastName: "",
  form_email: "",
  form_confirmEmail: "",
  form_organisation: "",
  form_organisationWebsite: "",
  form_organisationRole: "",
  Ticket: "Delegate", // Default ticket type
  quantity: 1,
};

export type initialCheckoutStateType = {
  tickets: { ticketName: string; value: number }[];
  leftOverTickets: { ticketName: string; value: number }[];
  myTicket: { ticketName: string; value: number };
  formValues: { id: string; data: TicketBilingInfo };
  otherTicketFormErrors: { id: string; data: TicketBilingInfo };
  formErrors: {
    "Confirm Email": string,
    'Email': string,
    "First Name": string,
    "Last Name": string,
    'Organisation': string,
    "Organisation Role": string,
    "Organisation Website": string,
  };
  billingInfo: { [ticket: string]: { name: string; value: string }[] };
  leftOverTicketFormValues: unknown[];
  total: number;
  payStackCheckout: {email: string, total: number};
};

const initialState: initialCheckoutStateType = {
  tickets: [
    { ticketName: "explorer", value: 0 },
    { ticketName: "founder", value: 0 },
    { ticketName: "investor", value: 0 },
    { ticketName: "delegate", value: 0 },
  ],
  myTicket: { ticketName: "", value: 0 },
  leftOverTickets: [
    { ticketName: "explorer", value: 0 },
    { ticketName: "founder", value: 0 },
    { ticketName: "investor", value: 0 },
    { ticketName: "delegate", value: 0 },
  ],
  leftOverTicketFormValues: [],
  formValues: { id: "", data: initialFormValue },
  formErrors: {
  "Confirm Email": "",
    'Email': "",
    "First Name": "",
    "Last Name": "",
    'Organisation': "",
    "Organisation Role": "",
    "Organisation Website": "",
},
  otherTicketFormErrors: { id: "", data: initialFormValue },
  billingInfo: {
    [""]: [
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
    ],
  },
  total: 0,
  payStackCheckout: {email: '', total: 0},
};

export const RegularTicket = 10000;
export const VIPTicket = 50000;

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setTickets: (state, action) => {
      state.tickets = action.payload;
    },

    setFormValues: (state, action) => {
      state.formValues = {
        ...state.formValues,
        [action.payload.id]: action.payload.data,
      };
    },
    setPayStackCheckoutData: (state, action) => {
      state.payStackCheckout = action.payload;
    },
    setFormErrors: (state, action) => {
      state.formErrors = action.payload;
    },
    setOtherTicketsFormErrors: (state, action) => {
          state.otherTicketFormErrors = {
            ...state.otherTicketFormErrors,
            [action.payload.id]: action.payload.data,
          };
        },

    setBillingInfo: (state, action) => {
      state.billingInfo = {
        [`${action.payload.ticket}`]: action.payload.data,
      };
    },

    setBillingTotal: (state, action) => {
      state.total = action.payload;
    },

    // Set the leftover value as an array of leftover paystackTickets
    setLeftoverTickets: (state, action) => {
      action.payload.forEach((ticket, index) => {
        state.leftOverTicketFormValues.push(...state.leftOverTicketFormValues, {
          [`${ticket.ticketName}${index}`]: initialValues,
        });
      });
      state.leftOverTickets = action.payload;
    },

    setLeftOverTicketsForms: (state, action) => {
      state.leftOverTicketFormValues = action.payload;
    },

    resetTickets: (state) => {
      state.tickets.forEach((ticket) => (ticket.value = 0));
      state.leftOverTickets = [];
    },

    // Set a ticket's value by ticketName and calculate leftovers for the rest
    setMyTicket: (state, action) => {
      state.myTicket = action.payload;
    },
  },
});

export const {
  setTickets,
  setMyTicket,
  setLeftoverTickets,
  setFormValues,
  setOtherTicketsFormErrors,
  setLeftOverTicketsForms,
  setBillingInfo,
  setBillingTotal,
  setFormErrors,
  setPayStackCheckoutData,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
