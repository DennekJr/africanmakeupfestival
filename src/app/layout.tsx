import "./globals.css";
import { Inter } from "next/font/google";
import METADATA_CONFIG from "@/config/metadata";
import ThemeRegistry from "@/app/components/ThemeRegistry/ThemeRegistry";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = METADATA_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
