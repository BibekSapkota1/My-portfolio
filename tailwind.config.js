/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'custom-3-gray': '#3D3D3D',
        'custom-4-gray': '#474747',
        'custom-dark': '#222222',
        'custom-2-dark': '#2F2F2F',
        'custom-3-dark': '#2A2A2A',
        'custom-4-dark': '#2D2D2D',
        'custom-dark-text': '#B0AAC0',
        'Facebook-color': '#4267B2',
        'linkdine-color': '#0077b5',
        'Github-color': '#4078c0',

      },
      fontFamily: {

        poppins: ['poppins'],
        Greatvibe: ['Great Vibes']


      }

    },
  },
  plugins: [],


}

