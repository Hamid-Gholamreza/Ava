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
        'sidebar-width': '166px',
      },
    },
  },

  plugins: [],
};


