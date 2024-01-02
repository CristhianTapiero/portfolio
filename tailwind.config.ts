import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      keyframes:{
        slide: {
          '0%':{transform:'translateX(0%)'},
          '100%':{transform:'translateX(-100%)'}
        },
        slide2:{
          '0%':{transform:'translateX(0%)'},
          '100%':{transform:'translateX(100%)'}
        }
      },
      animation:{
        slide: 'slide 40s linear infinite',
        slide2: 'slide2 40s linear infinite'
      }
    },
    colors: {
      brand:{
        100: '#F2EADF',
        200: '#D9CCC1',
        300: '#8C837B',
        400: '#595048',
        500: '#403933',
      }
    }
  },
  plugins: [],
}
export default config
