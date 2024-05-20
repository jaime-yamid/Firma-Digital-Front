/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'tuna': {
          '50': '#f6f7f9',
          '100': '#edeef1',
          '200': '#d6dae1',
          '300': '#b2bac7',
          '400': '#8995a7',
          '500': '#6a788d',
          '600': '#556174',
          '700': '#454e5f',
          '800': '#3c4350',
          '900': '#333842',
          '950': '#23272e',
      },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
