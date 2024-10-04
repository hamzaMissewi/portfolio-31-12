import React from "react";
// import { ClerkProvider } from "@clerk/nextjs";
import type {ThemeProviderProps} from "next-themes/dist/types";
import {ThemeProvider as NextThemesProvider} from "next-themes";

// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return children;
  // return (
  //   <ClerkProvider publishableKey={clerkFrontendApi}>{children}</ClerkProvider>
  // );
}
