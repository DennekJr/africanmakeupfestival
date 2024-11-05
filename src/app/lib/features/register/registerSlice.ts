import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  subPage: string;
  addOnTotal: number;
  addOns: string[];
  paymentMethod: string;
}

const initialState:initialStateType = {
  subPage: 'boothForm',
  addOns: [],
  addOnTotal: 0,
  paymentMethod: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setSubPage: (state, action) => {
      state.subPage = action.payload;
    },
    setAddOnTotal: (state, action) => {
      state.addOnTotal = action.payload;
    },
    setAddOns: (state, action) => {
      state.addOns = action.payload;
    },

    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },

    resetSubPage: (state) => {
      state.subPage = 'boothForm';
      state.addOnTotal = 0;
      state.addOns = [];
    },
  }
})

export const { setPaymentMethod, setAddOnTotal, setSubPage, setAddOns } = registerSlice.actions;
export default  registerSlice.reducer