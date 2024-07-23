/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-color-1': '#00BA9F',
        'custom-color-2': '#969696',
        'sidebar-width': '166px',
      },
    },
  },

  plugins: [],
};


