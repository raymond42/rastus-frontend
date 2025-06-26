import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "../lib/redux/provider";
import { Toaster } from "@/components/ui/toaster";
import { PageTransitionSpinner, RouteChangeHandler } from "./providers";
import React, { Suspense } from "react";
import { CartDropdown, Navbar } from "@/components/features";

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
      <body className="antialiased">
        <ReduxProvider>
          <PageTransitionSpinner />
          <Suspense>
            <RouteChangeHandler />
          </Suspense>
          <div className="absolute bg-white-primary w-full">
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
