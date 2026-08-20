import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050D18",
        foreground: "#F8FAFC",
        navy: {
          950: "#050D18",
          900: "#0B1E33",
          800: "#122A47",
          700: "#1B3B61",
          600: "#275182",
        },
        brandTeal: {
          300: "#4BD5D5",
          400: "#22C4C4",
          DEFAULT: "#0FA3A3",
          500: "#0FA3A3",
          600: "#0B8282",
          900: "#063A3A",
        },
        brandAmber: {
          300: "#F8C87A",
          400: "#F5B757",
          DEFAULT: "#F2A93B",
          500: "#F2A93B",
          600: "#D98A1B",
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
