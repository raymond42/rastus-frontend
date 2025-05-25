import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "../lib/redux/provider";
import { CartDropdown, Navbar } from "./components";
import { Toaster } from "@/components/ui/toaster";
import { PageTransitionSpinner } from "./providers/pageTransitionSpinner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RASTUS",
  description: "Fashion Design Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div className="absolute bg-white-primary w-full">
            <PageTransitionSpinner />
            <Navbar />
            <CartDropdown />
          </div>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
