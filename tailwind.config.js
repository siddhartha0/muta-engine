/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      brand: "#3ED5DD",
      black: "#06080D",
      white: "#fff",
      primary: "#00040f",
      secondary: "#2A2F41",
      default: "#09977C1A",
      "fadish-white": "#3F3E45",
      base: "#2D2B3F",
      ternary: "#13121F",
      "faidsh-grey": "#6D6D6D",
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
