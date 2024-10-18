import React from "react";
import WebWrapper from "../../app/components/Wrapper";
import { CheckoutProvider } from "../components/CheckoutContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebWrapper>
      <CheckoutProvider>{children}</CheckoutProvider>
    </WebWrapper>
  );
}
