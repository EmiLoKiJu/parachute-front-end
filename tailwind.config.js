/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      colors: {
        // color for hover
        'brand_color': '#f9b809',
        'brand_green': '#99c110',
        'brand_orange': '##ffc600',
        'brand_blue': '#10bbb5'
      },
      fontFamily: {
        roboto: ['roboto', 'sans'],
        viga: ['viga', 'sans'],
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

