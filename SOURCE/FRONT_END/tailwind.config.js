/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['futura', 'sans-serif'],
        raboto: ['raboto', 'sans-serif'],
        mont: ['mont', 'sans-serif'],
      },
    },
  },
  plugins: [
   
  ],
}

