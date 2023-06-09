"use client";

import NavBar from "@/app/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/app/components/Footer";
import Head from "./Head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="dark:bg-stone-800 bg-[#F5EFE7] transition duration-300 overflow-hidden">
        <ThemeProvider attribute="class" enableSystem={true}>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
