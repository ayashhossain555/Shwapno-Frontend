/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#ff0000", // red
          "secondary": "#000000", // black
          "accent": "#ffffff", // white
          "neutral": "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
