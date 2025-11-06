/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        formal: '#3b82f6',
        natural: '#22c55e',
        social: '#f97316',
        applied: '#eab308',
        humanities: '#a855f7',
        inter: '#06b6d4',
        glossary: '#ec4899',
      },
    },
  },
  plugins: [],
}
