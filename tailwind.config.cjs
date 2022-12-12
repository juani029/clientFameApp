/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '645px',
      md: '768px',
      lg: '900px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        '228b': '2px 2px 8px rgba(0,0,0)',
        '123g': '2px 2px 8px rgba(244,113,126)',
        '555b': '0px 0px 8px rgba(244,113,126)',
      },
      animation: {
        'ext-slow': 'ext 3s ease-in-out infinite',
      },
      keyframes: {
        ext: {
          '0%, 100%': { border: '0px #3D6487 solid' },
          '50%': { border: '5px #3D6487 solid' },
        },
      },
      dropShadow: {
        '228b': '2px 2px 8px rgba(0,0,0)',
        '123g': '0px 0px 5px rgba(244,113,126)',
      },
    },
    colors: {
      primary: '#3D6487',
      secondary: '#9BADBC',
      third: '#F4717F',
      fourth: 'white',
      transparent: 'transparent',
      fifth: '#7E97AC',
      seventh: '#000',
      eighth: 'red',
      thirdHover: '#EB3B4D',
      gray: '#f0f0f0',
      grayOscuro: '#cdcdcd',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
