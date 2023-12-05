/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'milton-black': '#2E2E2E',
        'milton-gray':'#6B6B7B',
        'milton-blue':'#F1F2F4',
        'milton-light': '#FEF9F6',
        'milton-peach':'#FEE9CB',
        'milton-green':'#DDF4E5',
        'milton-bluex':'#CCEAFD',
        'milton-red':'#FDDED6',
        'milton-violet':'#C39CF6',
        'milton-voilet-lite':'#F1F2F4',
        'milton-gray-ultra-lite':'#F3F3F3',
        'milton-gray-lite':'#7C7C7D',
        'milton-gray-dark': '#333333',
        'milton-gray-btn': '#CBCBD1',
      },
      screens: {
        'smx': '900px',
     

        
      },
      fontFamily:{
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
        "Feature1": `url('src/assets/img/feature1.webp')`
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    },
  },
  plugins: [],
}

