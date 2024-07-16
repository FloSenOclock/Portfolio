/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        minitel: ["Minitel", "sans-serif"],
      },
      colors: {
        light: {
          background: "#FFFFFF",
          bgsecondary: "#000000",
          bghover: "#B4B4B4",
          text: "#000000",
          txtsecondary: "#FFFFFF",
          txthover: "#B4B4B4",
          border: "#000000",
        },
        dark: {
          background: "#000000",
          bgsecondary: "#F76B15",
          bghover: "#FFA057",
          text: "#F76B15",
          txtsecondary: "#000000",
          txthover: "#66350C",
          border: "#F76B15",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
