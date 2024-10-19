import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "../app/components/ThemeRegistry/ThemeRegistry";
import React from "react";
import StoreProvider from "@/app/storeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ThemeRegistry>
          <StoreProvider>
            {children}
          </StoreProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
