/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      playFair: ['Playfair Display', 'serif'],
      workSans: [ 'Work Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'green': '#23BE0A',
        'sky': '#59C6D2',
        'dark' : {
          DEFAULT: '#131313',
          800: '#131313CC',
          700: '#131313B3'
        }
      }
    },
  },
  plugins: [require("daisyui")],
}

