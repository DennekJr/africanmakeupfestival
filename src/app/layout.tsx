import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "../app/components/ThemeRegistry/ThemeRegistry";
import React from "react";
import StoreProvider from "../app/storeProvider";
import TopLoader from "../app/components/TopLoader";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <title>Africa Makeup Festival</title>
    </head>
    <body className={`${inter.variable} font-sans`}>
    <ThemeRegistry>
      <StoreProvider>
        <TopLoader />
        {children}
      </StoreProvider>
    </ThemeRegistry>
    </body>
    </html>
  );
}