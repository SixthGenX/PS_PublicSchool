import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import ProgressBar from "../../components/ProgressBar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS Public School",
  description: "Welcome to PS Public School - Nurturing Excellence, Inspiring Futures.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ProgressBar></ProgressBar>
        <Navbar></Navbar>
        {children}
        <CTASection></CTASection>
        <Footer></Footer>
      </body>
    </html>
  );
}
