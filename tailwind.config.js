/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",            // todos los HTML en la raíz
    "./src/**/*.{html,js}" // todos los HTML y JS dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}