/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'lightgray': '#303030',
        'cosmicpurple': '#71319f',
        'purple2': '#8c3cc5',
        'darkgray': '#181818',
        'buttongray' : '#4e4949',
        'buttongray2' : '#606060',
        'buttons': '#b4adad'
      }
    },
  
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(lightgray|cosmicpurple|darkgray)/,
    },
  ],
}

