/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sec: "#080c24",
        bronze: '#b08d57',
        gold: '#FFD700', 
        silver: '#C0C0C0',
      }
    },
  },
  plugins: [],
}

