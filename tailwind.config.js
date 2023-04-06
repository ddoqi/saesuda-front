//tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand100: "#D89964",
        brandbeige: "#FDF4DF",
        brandpink: "#FF9C96",
        brandpink80: "#FFBFB3",
        brandyellow: "#FDD059",
        mono100: "#543B31",
        mono80: "#6D4D40",
      },
    },
  },

  plugins: [],
};
