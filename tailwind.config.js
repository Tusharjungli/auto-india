/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ needed for next-themes
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
        dark: '#0f0f0f',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: '#999999',
      },
    },
  },
  plugins: [],
};
