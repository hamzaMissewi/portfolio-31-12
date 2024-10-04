// import React from "react";
import "../globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "../../components/Header.js";
import Sidebar from "../../components/Sidebar.js";
import Footer from "../../components/Footer.js";
// import Head from "next/head";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

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
  params: { locale: string };
}

async function Layout({
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
        <title>Hamza Missaoui's Portfolio</title>
        <link rel="icon" href="/assets/b2b-alive-ltd-icon.svg" />
        {/*  /!*<meta name="description" content="Global description for the site." />*!/*/}
        {/*  <meta name="description" content="Welcome to the Home Page" />*/}
        {/*  <meta property="og:title" content="Home Page" />*/}
        {/*  <meta property="og:description" content="Welcome to the Home Page" />*/}
        {/*  <meta*/}
        {/*    property="og:image"*/}
        {/*    content="/assets/b2b-alive-ltd-icon.svg"*/}
        {/*    color="#5bbad5"*/}
        {/*  />*/}
        {/*  /!*<link  href="/path/to/image.jpg" />*!/*/}
      </head>

      <body
        className={locale === "ar" ? arFont.className : inter.className}
        suppressHydrationWarning={true}
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
              <div className="flex flex-col w-full h-full space-y-2 min-h-screen overflow-x-hidden mx-auto">
                <header>
                  <Header />
                </header>
                <div className={"container flex flex-grow spacing-2 w-full"}>
                  <Sidebar />
                  <div className={"w-full flex-grow"}>{children}</div>
                </div>

                <footer className={"sticky bottom-0 w-full"}>
                  <Footer />
                </footer>
              </div>
            </ClerkProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default Layout;
