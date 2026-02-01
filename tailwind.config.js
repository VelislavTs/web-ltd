/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dough: {
          50: '#fdfcfb',
          100: '#faf7f4',
          200: '#f5ede3',
          300: '#ede1d1',
          400: '#e4d4be',
          500: '#d4bfa2',
          600: '#b89a7a',
          700: '#9c7d5f',
          800: '#7d6449',
          900: '#5d4a38',
        },
        grain: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        crust: {
          50: '#fef9ee',
          100: '#fcefd4',
          200: '#f9dda8',
          300: '#f5c371',
          400: '#f0a044',
          500: '#eb7f20',
          600: '#dc6316',
          700: '#b74914',
          800: '#923918',
          900: '#773116',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
