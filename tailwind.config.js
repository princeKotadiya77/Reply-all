/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customBorder: 'rgba(123, 99, 99, 1)',
        customColor: 'rgba(50, 47, 44, 1)',
      },
    },
  },
  plugins: [],
}