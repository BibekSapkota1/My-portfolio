/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {

        'smm': '370px',
      },
      colors: {
        'custom-gray': '#948DAA',
        'custom-blue': '#F2F5FB',
        'custom-red': '#FD562A',
        'custom-grap': '#615978',
      },
    },
  },
  plugins: [],
}

