/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text1 : "#3A3740",
        text2: "#696671"
      }
    },
  },
  plugins: [],
}