/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E33529',
          light: '#fea8a8',
          lighter: '#ff6b6c',
          dark: '#ff3d3e',
          darker: '#ff1312',
        },
        secondary: {
          DEFAULT: '#FFDD9C',
          light: '#F2EFE7',
        },
        cream: {
          DEFAULT: '#ffd6a4',
          light: '#F2EFE7',
        },
        accent: {
          DEFAULT: '#F9B637',
        },
        orange: {
          DEFAULT: '#FB6C00',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
