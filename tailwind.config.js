/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "@/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      colors: {
        'brand_color': '#F9B809',
        'brand_green': '#99C110',
        'brand_orange': '##FFC600',
        'brand_blue': '#10BBB5'
      },
      fontFamily: {
        roboto: ['roboto', 'sans'],
        // mont: ['Montserrat-Regular', 'sans-serif'],
      },
      // backgroundImage:{
      //   'hero' : 'url(@/assets/images/hero/hero-1.jpg)',
      //   // 'hero2' : 'url(@/assets/images/hero/hero-1.jpg)',
      // },
      // screens:{
      //   'xs': '480px',
      //   'lg': '992px',
      // }
    },
  },
  plugins: [],
}

