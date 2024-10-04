// import "./globals.css";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Portfolio Next Hamza",
//   description: "Resume about me as web developer react - next - typescript",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
