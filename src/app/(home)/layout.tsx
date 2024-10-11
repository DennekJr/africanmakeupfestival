import React from "react";
import WebWrapper from "../components/Wrapper";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WebWrapper>{children}</WebWrapper>;
}
