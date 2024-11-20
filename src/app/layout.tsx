import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "../app/components/ThemeRegistry/ThemeRegistry";
import React from "react";
import TopLoader from "../app/components/TopLoader";
import METADATA_CONFIG from "../config/metadata";
import StoreProvider from "@/app/storeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = METADATA_CONFIG;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <link
        rel="icon"
        href="/images/footerLogo.svg"
        sizes="128x128"
        type="image/svg+xml"
        className={"!bg-white"}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Geist&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
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
