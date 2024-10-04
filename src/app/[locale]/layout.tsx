import React from "react";
import Header from "@/components/Header";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Html } from "next/document";
import "@/styles/globals.css";
import Head from "next/head";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
    <Html
      lang={locale}
      suppressHydrationWarning
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <Head>
        {/* Global meta tags or links can go here */}
        <title>Hamza Missaoui's Portfolio</title>
        <link rel="icon" href="/assets/b2b-alive-ltd-icon.svg" />
      </Head>

      {/*<Head>*/}
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
      {/*</Head>*/}

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
              <div className="flex flex-col w-full h-full min-h-screen overflow-x-hidden mx-auto">
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
    </Html>
  );
}

export default Layout;
