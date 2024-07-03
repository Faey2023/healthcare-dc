/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-navy": "#020043",
        "primary-yellow": "#FFC637",
        "primary-white": "#FFFFF5",
        "secondary-navy": "#343268",
        "primary-gray": "  #4D4C7B",
      },
    },
  },
  plugins: [],
};
