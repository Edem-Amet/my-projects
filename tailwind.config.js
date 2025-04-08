/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B4513",      // Brown
        secondary: "#FF8C00",    // Ripe Tangerine / Orange
      },
    },
  },
  plugins: [],
};
