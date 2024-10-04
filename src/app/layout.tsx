// import type { Metadata } from "next";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";


// export const metadata: Metadata = {
//   title: "Portfolio Next Hamza",
//   description: "Resume about me as web developer react - next - typescript",
// };

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

  return <html>{children}</html>;
  // return (
  // <ClerkProvider publishableKey={clerkFrontendApi}>{children}</ClerkProvider>
  // );
}
