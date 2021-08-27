const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        ...colors,
      }
    },
    variants: {
      extend: {
        maxHeight: ['focus'],
      },
    },
    plugins: [],
  }