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
      },
      // fontFamily: {
      //   pop: ['pop', 'sans-serif'],
      //   mont: ['Montserrat-Regular', 'sans-serif'],
      // },
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

