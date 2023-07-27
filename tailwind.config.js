/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
