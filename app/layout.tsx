import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import FloatingWA from "@/components/FloatingWA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "membangun website scalable",
  description: "membangun website dinamis",
  keywords:["Jasa Pembuatan Website","Websiste murah","Jasa Optimasi Web","Website cepat responsive dan Scalable"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Sidebar/>
        <Navbar/>
        <main className="pt-12">
           {children}
           <FloatingWA/>
        </main>
       
        <Footer/>
        </body>
    </html>
  );
}
