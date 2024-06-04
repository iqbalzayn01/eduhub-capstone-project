/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      fontbase: ["'Montserrat'", 'sans-serif'],
    },
    extend: {
      colors: {
        colorprimary: '#CDFE05',
        colorsecondary: '#F7F5F2',
        colorgray: '#A3A5AA',
      },
    },
  },
  plugins: [],
};
