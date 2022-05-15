module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          600: '#0B0940',
          800: '#03041c',
          900: '#00010D'
        },
        red: {
          700: '#7A1B0C'
        }
      },
    },
  },
  plugins: [],
}
