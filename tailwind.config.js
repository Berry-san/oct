/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      plugins: [require("tailwind-scrollbar-hide")],
      colors: {
        background: "#1D2123",
        podbg: "rgba(255, 255, 255, 0.07)",
        songsBg: "rgba(51, 55, 59, 0.37)",
        chartBg: "#1A1E1F",
      },
    },
  },
  plugins: [],
};
