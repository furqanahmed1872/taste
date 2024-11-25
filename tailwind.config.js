/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: { 
      
      screens: {
      'xs': '480px', // Extra small screens
      '2xl': '1440px', // Extra large screens
      '3xl': '1920px', // Ultra large screens
    },

      fontFamily: {
        poiret: ['"Poiret One"', 'cursive'], // Adds Poiret One as a custom font
        avenir: ['Nunito', 'sans-serif'], // Using Nunito as a replacement for Avenir
      },
      

      colors: {

        'customGreen': 'rgb(96, 106, 72)',

        'light-blue': '#018374',
        'custom-dark-red': '#1F0D07',
        'custom-grey': '#6C7075',
        'custom-dark-brown': '#2A0B0B',
        'custom-dark': '#6C0B0D',
        'custom-dark-blue': '#080D15',
      },
    }
  },
  plugins: []
};
