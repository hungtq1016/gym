const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hiragino Sans','Arial', 'sans-serif'],
        'raj' : ['Rajdhani'],
        'pop' : ['Poppins'],
        'mon' : ['Montserrat'],
      },
      screens: {
        'md':'769px',
      },
      colors: { 
        'green-550':'#2D8B47',
        'orange-550':'#EF5620',
        'orange-530':'#FF5F01',
        'yellow-550':'#EACB55',
        'red-750':'#B33A3B',
        'zinc-350':'#B9B9B9',
        'zinc-550':'#868686',
        'zinc-590':'#505050',
        'zinc-610':'#666666',
        'zinc-650':'#707070',
        'zinc-840': '#222222',
        'zinc-850': '#242424',
        'sky-550':'#2152F5',
        'blue-850':'#2b28a2',
        'ocean-650':'#127FFF',
        'neutral-45':'#f9f9f9',
        'neutral-350':'#bcbcbc',
        'neutral-450':'#b2b2b2',
        'neutral-550':'#7c7c7c',
        'neutral-850':'#333333',
      },
    },
      maxWidth: {
        lg: '1080px',
        '7xl': '1280px',
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
