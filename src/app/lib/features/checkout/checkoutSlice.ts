import { createSlice } from "@reduxjs/toolkit";

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

export const initialValues = [
  { name: "First Name", value: ""},
  { name: "Last Name", value: ""},
  { name: "Phone Number", value: ""},
  { name: "Country", value: ""},
  { name: "Email", value: ""},
  { name: "Confirm Email", value: ""},
  { name: "Organisation", value: ""},
  { name: "Organisation Website", value: ""},
  { name: "Organisation Role", value: ""},
];

const initialFormValue = {
  form_firstName: '',
  form_lastName: '',
  form_email: '',
  form_confirmEmail: '',
  form_organisation: '',
  form_organisationWebsite: '',
  form_organisationRole: '',
  Ticket: 'Delegate', // Default ticket type
  quantity: 1,
};

type initialStateType = {
  tickets: {ticketName: string, value: number}[]
  leftOverTickets: {ticketName: string, value: number}[]
  myTicket: {ticketName: string, value: number},
  formValues: {id: string, data: TicketBilingInfo},
  billingInfo: {[ticket:string] : { name: string, value: string}[]},
  leftOverTicketFormValues: unknown[],
  total: number;
}

const initialState:initialStateType = {
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
  formValues: {id: '', data: initialFormValue},
  billingInfo: {['']: [
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
    ]},
  total: 0,
};

export const ExplorerTicket = 14999;
export const FounderTicket = 59999;
export const InvestorTicket = 125000;
export const DelegateTicket = 187500;


export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setTickets: (state, action) => {
      state.tickets = action.payload;
    },

    setFormValues: (state, action) => {
      state.formValues = ({
        ...state.formValues,
        [action.payload.id]: action.payload.data,
      });
    },

    setBillingInfo: (state, action) => {
      state.billingInfo = ({
        [`${action.payload.ticket}`]: action.payload.data,
      });
    },

    setBillingTotal: (state, action) => {
      state.total = action.payload;
    },

    // Set the leftover value as an array of leftover tickets
    setLeftoverTickets: (state, action) => {
      action.payload.forEach((ticket, index) => {
        state.leftOverTicketFormValues.push(...state.leftOverTicketFormValues, { [`${ticket.ticketName}${index}`]: initialValues });
      })
      state.leftOverTickets = action.payload;
    },

    setLeftOverTicketsForms: (state, action) => {
      state.leftOverTicketFormValues = action.payload;
    },

    resetTickets: (state) => {
      state.tickets.forEach(ticket => (ticket.value = 0));
      state.leftOverTickets = [];
    },

    // Set a ticket's value by ticketName and calculate leftovers for the rest
    setMyTicket: (state, action) => {
      state.myTicket = action.payload;
    }
  }
})

export const { setTickets, setMyTicket, setLeftoverTickets, setFormValues, setLeftOverTicketsForms, setBillingInfo, setBillingTotal } = checkoutSlice.actions;
export default checkoutSlice.reducer