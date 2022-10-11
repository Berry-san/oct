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
      plugins: [require("tailwind-scrollbar-hide")],
      colors: {
        background: "#1D2123",
      },
    },
  },
  plugins: [],
};