/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      'neutralSilver': '#F5F7FA',
      'neutralPeriwinkle': '#CCCCFF',
      'brandPrimary': '#4CAF4F',
      'neutralGrey': '#F5F7FA',
     } 
    },
  },
  plugins: [],
}
