"use client"
import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [data, setData] = useState(null);

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);