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
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Header />
        {children}
        <footer className='mt-auto'>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
