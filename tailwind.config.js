/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["main"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

