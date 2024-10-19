import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
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
  leftOverTicketFormValues: []
}

const initialValues = [
  { name: "First Name", value: "", id: '' },
  { name: "Last Name", value: "", id: '' },
  { name: "Phone Number", value: "", id: '' },
  { name: "Country", value: "", id: '' },
  { name: "Email", value: "", id: '' },
  { name: "Confirm Email", value: "", id: '' },
  { name: "Organisation", value: "", id: '' },
  { name: "Organisation Website", value: "", id: '' },
  { name: "Organisation Role", value: "", id: '' },
];

// const initTicketFormValues:Array<Record<string, Array<{ name: string, value: string}>>> = [];


export const checkoutSlice = createSlice({
  name: 'checkout',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTickets: (state, action) => {
      state.tickets = action.payload;
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

export const { setTickets, setMyTicket, setLeftoverTickets, resetTickets, setLeftOverTicketsForms } = checkoutSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const tickets = (state: RootState) => state.tickets;

export default checkoutSlice.reducer