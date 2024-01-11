import "./globals.css";

import React from "react";

import Footer from "@/app/components/Footer";

import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        {children}
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
