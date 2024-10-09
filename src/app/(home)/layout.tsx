import React from "react";
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <div className={'w-screen min-h-dvh flex flex-col relative overflow-x-hidden'}>{children}</div>;
}
