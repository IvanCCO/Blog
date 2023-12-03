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
        white: "#ffff",
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
        inter: ["Inter", "sans-serif"],
        jomolhari: ["Jomolhari", "serif"]
      },
      fontSize: {
        "2xl": "1.75rem",
      },
      spacing: {
        'page-default' : "18rem"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
