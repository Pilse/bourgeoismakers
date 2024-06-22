"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}
