/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        laptopl: "1440px",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ocalla: ["Ocalla", "cursive"],
        asher: ["Asher", "sans-serif"],
        moki: ["Moki", "cursive"],
        sticky: ["Sticky", "cursive"],
        typold: ["Typold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
