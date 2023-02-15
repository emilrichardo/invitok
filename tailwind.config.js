/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'primary': '#0c2bd6',
      'primary-light': '#E8C892',
      'secondary': '#C3C3A7',
      'light': '#d0e0ed',
      'white': '#fff',
      'dark': '#000',
    },

    extend: {

      fontFamily: {
        'sans':  'Fira Sans ,sans-serif ' ,

      },

    },
  },
  plugins: [],
}