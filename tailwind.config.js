/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f3',
          100: '#faeee0',
          200: '#f4dac0',
          300: '#ecbf94',
          400: '#e29c66',
          500: '#d97d42',
          600: '#c86537',
          700: '#a64e2f',
          800: '#85402b',
          900: '#6c3525',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}