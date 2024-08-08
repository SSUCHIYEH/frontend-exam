/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1440px',
      },
      spacing: {
        0.75: '0.188rem', // 3px
        3.25: '0.813rem', // 13px
        4.5: '1.125rem', // 18px
        6.5: '1.625rem', //26px
        7.5: '1.875rem', // 30px
        9.25: '2.313rem', // 37px
        13.25: '3.313rem', // 53px
        13.5: '3.375rem', // 54px
        21.75: '5.438rem', // 87px
        22: '5.5rem', // 88px
        32.5: '8.125rem', // 130px
        37.5: '9.375rem', // 150px
        64.25: '16.063rem', // 257px
        85.75: '21.438rem', // 343
        93.75: '23.438rem', // 375px
        181.25: '45.313rem', // 725px
      },
      colors: {
        'sidebar-dark': '#1B1B1B',
        'greyscale-dark': '#181818',
        'greyscale-400': '#B2B2B2',
        black: '#121212',
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontSize: {
        'subtitle-regular': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '400',
          },
        ], // 16px, 24px, 0.15px, 400
        'subtitle-blod': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '700',
          },
        ], // 16px, 24px, 0.15px, 700
        'caption-regular': [
          '0.75rem',
          {
            lineHeight: '1.125rem',
            letterSpacing: '0.025em',
            fontWeight: '400',
          },
        ], // 12px, 18px, 0.4px, 400
        'headline-3-bold': [
          '3rem',
          { lineHeight: '3.125rem', fontWeight: 700 },
        ], // 48px, 50px, 700
        'headline-4-regular': [
          '1.875rem',
          {
            lineHeight: '2.813rem',
            letterSpacing: '0.016rem',
            fontWeight: 400,
          },
        ], // 30px, 45px, 0.25px, 400
        'headline-5-bold': [
          '1.5rem',
          { lineHeight: '2.25rem', fontWeight: 700 },
        ], // 24px, 36px, 700,
        'headline-5-regular': [
          '1.5rem',
          { lineHeight: '2.25rem', fontWeight: 400 },
        ], // 24px, 36px, 400
        'body-1-medium': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '500',
          },
        ], // 16px, 24px, 0.15px, 500
        'body-1-regular': [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '0.009rem',
            fontWeight: '400',
          },
        ], // 16px, 24px, 0.15px, 500
        'body-2-regular': [
          '0.875rem',
          {
            lineHeight: '1.313rem',
            letterSpacing: '0.016rem',
            fontWeight: '400',
          },
        ], // 14px, 21px, 0.25px, 400
        'body-3-regular': [
          '0.931rem',
          {
            lineHeight: '1.397rem',
            letterSpacing: '0.009rem',
            fontWeight: '400',
          },
        ], // 14.9px, 22.35px, 0.14px, 400
        'body-5-regular': [
          '0.698rem',
          {
            lineHeight: '1.048rem',
            letterSpacing: '0.023rem',
            fontWeight: '400',
          },
        ], // 11.17px, 16.76px, 0.37px, 400
      },
    },
  },
  plugins: [],
};
