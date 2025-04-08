/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // 👈 auto-detects from OS theme
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#e11d48',
        dark: '#0f0f0f'
      },
    },
  },
  plugins: [],
};
