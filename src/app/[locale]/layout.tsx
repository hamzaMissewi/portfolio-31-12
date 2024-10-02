// import type { Metadata } from "next";
import "@/styles/globals.css";
import React from "react";
import Header from "@/components/Header";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";

export enum Language {
  FR = "fr",
  EN = "en",
  AR = "ar",
}

const arFont = localFont({
  src: "../../Rubik-MediumItalic.ttf",
});
const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {/*<head>*/}
      {/*  <link*/}
      {/*    href="/assets/b2b-alive-ltd-icon.svg"*/}
      {/*    color="#5bbad5"*/}
      {/*  />*/}
      {/*  <title className={"text-gray-800 accent-gray-300 mb-5"}>*/}
      {/*    Hamza Missaoui's Portfolio*/}
      {/*  </title>*/}
      {/*</head>*/}

      {/*<body className={inter.className} className="dark:bg-[#1A1C29] overflow-hidden w-full h-full" >*/}
      <body
        suppressHydrationWarning={true}
        className={locale === "ar" ? arFont.className : inter.className}
      >
        <NextIntlClientProvider messages={messages}>
          {/*<div className="flex flex-col min-h-screen max-w-4xl mx-auto">*/}
          {/*<ThemeProvider*/}
          {/*  attribute="class"*/}
          {/*  defaultTheme="system"*/}
          {/*  enableSystem*/}
          {/*  disableTransitionOnChange*/}
          {/*>*/}
          <div className="flex flex-col min-h-screen min-w-screen overflow-x-hidden z-1 w-full ">
            <Header />
            <div className={"min-w-screen container flex spacing-2 flex-1"}>
              <Sidebar />
              <div className={"w-full flex-grow min-w-screen"}>{children}</div>
            </div>
          </div>
          {/*</ThemeProvider>*/}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
