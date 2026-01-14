// src/app/layout.tsx
import { Inter, Montserrat, Open_Sans, Kumbh_Sans, Jost, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import WhatsAppButton from "../components/WhatsAppButton";


export const metadata: Metadata = {
  title: "PPEPCA – Pakistan Petroleum Exploration & Production Companies Association",
  description:
    "PPEPCA represents Pakistan’s oil and gas exploration and production companies, promoting sustainable and responsible energy development in Pakistan.",
  
  keywords: [
    "PPEPCA",
    "Pakistan Petroleum",
    "Oil & Gas Pakistan",
    "Energy Exploration Pakistan",
    "Oil Companies Pakistan",
    "Gas Production Pakistan",
    "Sustainable Energy Pakistan",
    "Petroleum Industry Pakistan",
    "Pakistan Energy Sector",
  ],

  authors: [{ name: "PPEPCA", url: "https://www.ppepca.com/" }],
  creator: "Devbay Technologies",
  publisher: "Devbay Technologies",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "PPEPCA – Pakistan Petroleum Exploration & Production Companies Association",
    description:
      "Promoting sustainable and responsible energy development in Pakistan's oil and gas sector.",
    url: "https://www.ppepca.com/",
    siteName: "PPEPCA",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "PPEPCA Logo",
      },
    ],
    locale: "en_PK",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@PPEPCA",
    title: "PPEPCA – Pakistan Petroleum Exploration & Production Companies Association",
    description:
      "Promoting sustainable and responsible energy development in Pakistan's oil and gas sector.",
    images: ["/logo.png"],
  },
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
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
