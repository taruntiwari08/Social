// Tailwind CSS configuration file

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // Define a custom gradient name and value
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.45) 45%, rgba(0, 0, 0, 0.6) 60%)',
      },
    },
  },
  plugins: [],
}