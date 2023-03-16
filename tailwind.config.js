/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize:{
      xs: '0.75rem',
      base: '1rem',
      sm: '0.875rem',
      '3xl': '1.875rem',
      '2xl': '1.5rem'
    }
  },
  plugins: [],
}