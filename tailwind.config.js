/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: "900px",
        other: { min: "350px", max: "1200px" },
      },
    },
  },
  plugins: [],
};
