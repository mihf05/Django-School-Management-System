const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yale-blue': '#01377d',
        'blue-green': '#009dd1',
        'non-photo-blue': '#97e7f5',
        'sgbus-green': '#7ed348',
        'jade': '#26b170',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
