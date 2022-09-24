/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spotify: ['circular', 'sans-serif']
      }
    },
  },
  plugins: [],
}
