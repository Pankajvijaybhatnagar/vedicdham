/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef8e7',
          100: '#fdefc4',
          200: '#fbe396',
          300: '#f9d668',
          400: '#f7cc45',
          500: '#f5c222',
          600: '#e5b01e',
          700: '#d39918',
          800: '#c18313',
          900: '#a0600a',
        },
        secondary: {
          50: '#fff1f0',
          100: '#ffdcd9',
          200: '#ffb3ab',
          300: '#ff8a7d',
          400: '#ff6149',
          500: '#ff4124',
          600: '#f5351a',
          700: '#e32810',
          800: '#d11d07',
          900: '#b31000',
        },
        dark: {
          50: '#f5f6f7',
          100: '#e4e6e9',
          200: '#c9ced4',
          300: '#a2aab5',
          400: '#6e7888',
          500: '#4a5260',
          600: '#3a404d',
          700: '#2f3440',
          800: '#282c37',
          900: '#1a1d24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
