import { createSlice } from "@reduxjs/toolkit";
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

const initialValues = [
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
  billingInfo: {'': { name: string, value: string}[]},
  leftOverTicketFormValues: unknown[],
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
  billingInfo: {'': [
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
    ]}
};

// const initTicketFormValues:Array<Record<string, Array<{ name: string, value: string}>>> = [];


export const checkoutSlice = createSlice({
  name: 'checkout',
  // `createSlice` will infer the state type from the `initialState` argument
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
        [action.payload.ticket]: action.payload.data,
      });
    },

    setBillingTotal: (state, action) => {
      console.log(action.payload);
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
    // Reset all ticket values and leftover
    resetTickets: (state) => {
      state.tickets.forEach(ticket => (ticket.value = 0));
      state.leftover = [];
    },

    // Set a ticket's value by ticketName and calculate leftovers for the rest
    setMyTicket: (state, action) => {
      state.myTicket = action.payload;
    }
  }
})

export const { setTickets, setMyTicket, setLeftoverTickets, setFormValues, setLeftOverTicketsForms, setBillingInfo } = checkoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const tickets = (state: RootState) => state.tickets;

export default checkoutSlice.reducer