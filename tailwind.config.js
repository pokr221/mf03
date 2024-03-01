/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '250px': '250px',
      },
      height: {
        '92px': '92px'
      },
      width: {
        '250px': '250px'
      }
    },
  },
  plugins: [],
}

