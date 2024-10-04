import "@/styles/globals.css";
import React from "react";
import Header from "@/components/Header";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/layout";
import { ClerkProvider } from "@clerk/nextjs";
import { lightTheme, darkTheme, colorTheme } from "@/styles/theme";
// import Head from "next/head";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";


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

async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <head>
        {/*<meta name="description" content="Global description for the site." />*/}
        {/*<link href="/assets/b2b-alive-ltd-icon.svg" color="#5bbad5" />*/}
        <title className={"text-gray-800 accent-gray-300 mb-5"}>
          Hamza Missaoui's Portfolio
        </title>
      </head>

      <body
        suppressHydrationWarning={true}
        className={locale === "ar" ? arFont.className : inter.className}
      >
        <ThemeProvider
          themes={["dark", "light", "system"]}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <ClerkProvider publishableKey={clerkFrontendApi}>
              <div className="flex flex-col min-h-screen overflow-x-hidden mx-auto">
                <Header />
                <div className={"container flex flex-grow spacing-2 w-full"}>
                  <Sidebar />
                  <div className={"w-full flex-grow"}>{children}</div>
                </div>
              </div>
            </ClerkProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
