/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        default: "5px",
      },
      colors: {
        "font-black-color": "#434343",
        "he-background": "#2E2E32",
        "low-text-black": "#797979",
        "purple-soft": "#AB9ADD",
        white: "#ffff",
        "he-cycle": "#7A7A8D",
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
        inter: ["Inter", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"],
      },
      fontSize: {
        "2xl": "1.75rem",
      },
      spacing: {
        "default-width": "1.25rem",
        "default-heigh": "2.5rem",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
