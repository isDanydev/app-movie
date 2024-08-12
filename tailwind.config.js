/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        md: "900px", // Cambia el breakpoint 'md' a 900px
      },
    },
  },
  plugins: [],
};
