import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: "Portfolio Next Hamza",
  description: "Resume about me as web developer react - next - typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    <ClerkProvider publishableKey={clerkFrontendApi}>{children}</ClerkProvider>
  );
}
