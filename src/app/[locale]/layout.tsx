import "@/styles/globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ui/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// const arFont = localFont({
//   src: "../../fonts/Rubik-MediumItalic.ttf",
// });

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: Readonly<React.ReactNode>;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "Portfolio Next Hamza",
  description: "Resume about me as fullstack web developer",
};

// async function Layout({ children, params: { locale } }: RootLayoutProps) {
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  // const intl = useLocale(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>Hamza Missaoui's Portfolio</title>
        <link rel="icon" href="/assets/b2b-alive-ltd-icon.svg" />
        <meta name="description" content="Hamza Missaoui Resume" />
        {/*  <meta property="og:title" content="Welcome to the Home Page" />*/}
      </head>

      <body
        suppressHydrationWarning={true}
        className={inter.className}
        // className={locale === "ar" ? arFont.className : inter.className}
      >
        <NextIntlClientProvider messages={messages}>
          <ClerkProvider dynamic>
            <ThemeProvider
              themes={["dark", "light"]}
              attribute="class"
              defaultTheme="light"
              // enableSystem
              // disableTransitionOnChange
            >
              <Header />
              <div
                className={
                  "flex flex-grow flex-1 items-center px-1 overflow-x-hidden min-h-screen w-full"
                }
              >
                <Sidebar />
                {children}
              </div>
              <Footer />
            </ThemeProvider>
          </ClerkProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
