/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#71eac6'
        },
        primary: {
          300: '#F2E4D0',
          500: '#DFD3C3',
          800: '#9D9180'
        },
        dark: '#27232C',
        purple: '#B986F2'
      },
      fontFamily: {
        'dm': 'DM Sans'
      },
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1300px',
        },
      },
      lineHeight: {
        '20': '6rem',
        '12': '3rem',
        '13': '3.5rem'
      },
      spacing: {
        '20': '8rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
