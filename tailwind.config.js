/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a3b5a3',
          400: '#7d947d',
          500: '#5f7a5f',
          600: '#4a614a',
          700: '#3d4f3d',
          800: '#334133',
          900: '#2b362b',
        },
        ocean: {
          50: '#f0f7fa',
          100: '#daeef5',
          200: '#b9dcea',
          300: '#89c4db',
          400: '#52a3c8',
          500: '#3487af',
          600: '#2b6c94',
          700: '#265779',
          800: '#244a64',
          900: '#223f55',
        },
        muted: {
          50: '#f8f9fa',
          100: '#eef1f4',
          200: '#dde3e9',
          300: '#c4ced8',
          400: '#a5b3c1',
          500: '#8897aa',
          600: '#6f7e90',
          700: '#5a6775',
          800: '#4d5762',
          900: '#434a53',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Poetsen One', 'cursive'],
      },
      borderRadius: {
        'bento': '1.5rem',
      },
      boxShadow: {
        'bento': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'bento-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
