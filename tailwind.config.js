/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      other: { min: "300", max: "1200px" },

      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
  },
  plugins: [],
};
