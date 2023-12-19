import type { Metadata } from "next";
import { Montserrat, Jacques_Francois } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import NextAuthProvider from "./NextAuthProvider";

const mont = Montserrat({ subsets: ["latin"] });

const jacques = Jacques_Francois({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jacques",
});

export const metadata: Metadata = {
  title: "Koinonia",
  description: "A full-stack web app built with NextJS and deployed with aws.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en" className={jacques.variable}>
      <body className={mont.className}><NextAuthProvider>{children}</NextAuthProvider></body>
    </html>
  );
}
