module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue': '#4ad4c6',
        'Ice': '#9bf1e9',
        'DGreen': '#247b7b',
        'White': '#fffffa',
        'Black': '#000000',
      },
      height: {
        '128': '32rem',
        '116': '28rem',
      }
    },
  },
  plugins: [],
}
