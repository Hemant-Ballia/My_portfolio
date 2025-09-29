/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["'Space Grotesk'", "sans-serif"],
        nunito: ["'Nunito Sans'", "sans-serif"],
        epunda: ["'Epunda Slab'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#10b981",
          dark: "#059669",
        },
      },
      boxShadow: {
        glow: "0 0 10px rgba(16, 185, 129, 0.4)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
