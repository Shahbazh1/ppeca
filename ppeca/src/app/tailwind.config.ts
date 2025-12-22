import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Default sans font uses Inter
        sans: ["var(--font-inter)", ...fontFamily.sans],
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"], // fixed missing variable
        openSans: ["var(--font-open-sans)"],
      },
      screens: {
        // Custom breakpoints
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
