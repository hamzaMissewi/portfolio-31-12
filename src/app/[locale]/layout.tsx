import "../globals.css";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

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
        <meta name="description" content="Hamza Missaoui Resume" />
        {/*  <meta property="og:title" content="Welcome to the Home Page" />*/}
        {/*  <meta* property="og:image" content="/assets/b2b-alive-ltd-icon.svg"*/}
      </head>

      <body
        className={locale === "ar" ? arFont.className : inter.className}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          themes={["dark", "light"]}
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <ClerkProvider publishableKey={clerkFrontendApi}>
              <div className="flex flex-col mx-auto overflow-hidden">
                <header>
                  <Header />
                </header>
                <div className={"flex flex-grow flex-1 spacing-1"}>
                  <Sidebar />
                  <div className={"p-1 overflow-x-auto"}>{children}</div>
                </div>

                <footer className="max-h-[300px] flex flex-wrap bottom-0 mt-2 px-1">
                  <section id={"footer"} className={"snap-end"}>
                    <Footer />
                  </section>
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
