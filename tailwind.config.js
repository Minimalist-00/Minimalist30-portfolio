/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        main: '960px',
      },
      colors: {
        black: {
          DEFAULT: '#282828',
          lt: '#333333',
          sub: '#555555',
          sub2: '#585858',
        },
        blue: {
          DEFAULT: '#5589f7',
          lt: '#eef3fe',
        },
      },
    },
    fontFamily: {
      custom: ['noto-sans', 'sans-serif'],
    },
  },
  plugins: [],
}
