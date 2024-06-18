"use client";

import { Toaster } from "react-hot-toast";

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "6px",
            boxShadow: "none",
            color: "white",
            padding: "0 6px",
            backgroundColor: "transparent",
            fontSize: "14px",
            width: "720px",
            maxWidth: "100%",
          },
          duration: 3000,
        }}
      />
      {children}
    </>
  );
}
