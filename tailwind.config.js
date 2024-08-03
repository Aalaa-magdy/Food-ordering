/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ffedd5',
      },
      fontFamily:{
        adu:["Edu AU VIC WA NT Hand", 'adu']
      },
    },
  },
  plugins: [],
}

