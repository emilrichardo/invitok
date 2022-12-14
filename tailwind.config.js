/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'primary': '#B77B44',
      'primary-light': '#E8C892',
      'secondary': '#C3C3A7',
      'light': '#FCFBFA',
      'white': '#fff',
      'dark': '#2D1F13',
    },

    extend: {

      fontFamily: {
        'sans':  'Fira Sans ,sans-serif ' ,
        'serif':  'EB Garamond , serif ' ,
        'mono':  'Space Mono , monospace ' ,
      },

    },
  },
  plugins: [],
}