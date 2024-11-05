import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "../app/components/ThemeRegistry/ThemeRegistry";
import React from "react";
import TopLoader from "../app/components/TopLoader";
import METADATA_CONFIG from "../config/metadata";

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
      <link rel="icon" href="/images/footerLogo.svg" sizes="128x128" type="image/svg+xml" className={'!bg-white'} />
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
    </head>
    <body className={`${inter.variable} font-sans`}>
    <ThemeRegistry>
    <TopLoader />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
