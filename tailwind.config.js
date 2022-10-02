/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        yellow: 'hsla(53, 98%, 51%, 1)',
        greenLight: 'hsla(144, 80%, 33%, 1)', 
        green: 'hsla(144, 71%, 33%, 1)', 
        greenButton:'hsla(144, 71%, 33%, 0.75)',
        greenDark:'hsla(144, 80%, 10%, 1)',
        greenMobileBackground:'hsla(144, 71%, 33%, 0.9)',
        brightRedSupLight: 'hsl(12, 88%, 79%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkLight: 'hsla(144, 71%, 5%, 0.7)',
        light: 'hsla(0, 0%, 100%, 1)',
        veryLightGray: 'hsla(144, 80%, 96%, 1)',
        overlay:'hsla(144, 71%, 5%, 0.7)',
      }
    },
  },
  plugins: [],
}


 