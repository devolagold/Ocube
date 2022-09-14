/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px'
    },
    
    extend: {
      colors: {
        Dark: '#1B1C1E',
        White: '#000000',
        Green: '#148E88',
        Grey: '#7B7B7B'
      },

      fontFamily: {
        Inter: ["Inter"]
      },
    },
  },
  plugins: [],
}
