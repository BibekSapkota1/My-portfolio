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
        'custom-2-gray': '#333333',
        'custom-3-gray':'#3D3D3D',
        'custom-4-gray':'#474747',
      },
    },
  },
  plugins: [],
}

