/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          1: "#F5EFFF",
          2: "#E5D9F2",
          3: "#CDC1FF",
          4: "#A294F9",
          5: "#030711",
          6: "#00040e",
          7: "#0e1014",
          8: "#7d7f84"
        }
      }
    },
  },
  plugins: [],
}

