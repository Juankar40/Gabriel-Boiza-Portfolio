/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'primary': '#4bb1b7',
        'secondary': '#9aaeb7',
        'accent': '#282f40',
        'light': '#fbfbfb',
        'dark': '#121212',
        'dark-card': '#2b3544',
        'dark-secondary': '#a0a0a0',
      }
    },
  },
  plugins: [],
}