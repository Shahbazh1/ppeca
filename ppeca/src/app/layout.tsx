// src/app/layout.tsx
import { Inter, Montserrat, Open_Sans, Kumbh_Sans, Jost, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "PPECA",
  description: "Pakistan Petroleum Exploration & Production Companies Association",
};

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh",
});

// Inter - for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Montserrat - for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Open Sans - for alternate text or buttons
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

// Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

// Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="m-0 p-0 w-full overflow-x-hidden">
      <body className={`${plusJakartaSans.variable} ${jost.variable} ${kumbhSans.variable} ${inter.variable} ${montserrat.variable} ${openSans.variable} ${poppins.variable} m-0 p-0 w-full overflow-x-hidden1`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
