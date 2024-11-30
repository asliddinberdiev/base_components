import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xsm': '375px',
      xsm: '425px',
      '3xl': '2000px',
      ...defaultTheme.screens
    },
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')]
}