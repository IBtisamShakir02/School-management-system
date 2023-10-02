/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#04213F",
        "primary-green": "#27A558",
      },
      fontFamily:{
        popins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
