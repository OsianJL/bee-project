/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bee-gradient-01': 'linear-gradient(45deg, #000000, #FFD700)',
        'bee-gradient-02': 'linear-gradient(45deg, #000000, #D4A017)',
        'bee-gradient-03': 'linear-gradient(45deg, #000000, #FFA500, #FFD700)',
        'bee-gradient-04': 'linear-gradient(circle, #000000, #FFD700)',
        'bee-gradient-05': 'linear-gradient(45deg, #000000, #444444, #D4A017, #FFCC00)',
      }
    },
  },
  plugins: [],
}