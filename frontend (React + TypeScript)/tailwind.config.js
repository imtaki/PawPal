/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // Add this if using Vite
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
