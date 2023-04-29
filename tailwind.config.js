/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-1": "#4537EF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
