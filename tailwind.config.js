/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        legacyGold: '#C6AA76',
      },
      borderWidth: {
        16: '16px',
      },
    },
  },
  plugins: [],
};
