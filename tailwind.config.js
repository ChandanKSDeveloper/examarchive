/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation : {
        slideLeft : 'slideLeft .3s ease-in',
        slideRight : 'slideRight .3s ease-in',

      },
      keyframes : {
        slideLeft : {
          '0%' : { transform : 'translateX(-10px)', opacity : '0'},
          '100%' : { transform: 'translateX(0)', opacity:'1'},
        },      
        slideRight : {
          '0%' : { transform : 'translateX(10px)', opacity : '0'},
          '100%' : { transform: 'translateX(0)', opacity:'1'},
        },            
     
      }
    },
  },
  plugins: [],
}

