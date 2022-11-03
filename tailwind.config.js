/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "app",
        'sans-bold': "app-bold",
        'sans-heavy': "app-heavy",
        'sans-semibold':"app-semiBold"
      },
      colors: {
        'primary': {
          900:"#5135FF",
        },
        'secondry': {
          900:"#CFCFCF",
          800:"#666666",
          700:"#757575",
          600:"#3F3F3F",
          500:"#AFAFAF"
        }
      },
      width:{
        "9/8":"1120px"
      },
      backgroundImage: {
        'hero-bg': "url('/assets/img/img1.png')",
        'section-bg':"url('/assets/img/imgbg1.png')"
      },
      lineHeight:{
        150:"105px",
        56:"56px",
        26:"1.625rem",
        70:"70px",
      },
      fontSize:{
        80:"80px",
        258:"258px",
        "4xl":"40px",
        "38.5":"38px"
      },
      maxWidth: {
        '6xl': '1120px',
      }
    },
  },
  plugins: [],
}