/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#079211',
        dark: '#262626',
        secondary: '#d97706',
        icon: '#d4d4d8',
      },
      screens: {
        '2xl' : '1536px',
      },
    },
  },
  plugins: [],
};
