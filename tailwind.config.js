/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#04213F',
        'primary-green':'rgb(39, 165, 88)',
      },
    },
  },
  plugins: [],
}

