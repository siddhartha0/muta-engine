/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      brand: "#3ED5DD",
      black: "#06080D",
      white: "#fff",
      primary: "#0C101A",
      secondary: "#3C3B42",
      ternary: "#13121F",
    },
    extend: {
      fontFamily: {
        urbanist: ["Montserrat", "sans-serif"],
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
