const colors = require('tailwindcss/colors');
const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultColors,
      ...{
        teal: colors.teal,
      },
    },
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
      test: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        homepage: "url('./images/open-field.png')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      display: ['group-hover'],
      margin: ['last'],
      borderRadius: ['last'],
      backgroundColor: ['checked'],
      visibility: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
