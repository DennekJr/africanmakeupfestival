import React from "react";
import WebWrapper from "../../app/components/Wrapper";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;

  if (slug) {
    notFound();
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebWrapper>
      {children}
    </WebWrapper>
  );
};
