/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        OpenSans : ['Open Sans', "sans-serif"]
      },
      zIndex : {
        '100': '100',
      }
    },
  },
  plugins: [],
}

