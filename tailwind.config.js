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
      },
      colors: {
        'primary': {
          900:"#5135FF",
        },
        'secondry': {
          900:"#CFCFCF",
          800:"#666666"
        }
      },
      // cursor: {
      //   'pointer': 'url("/assets/img/cursorP.svg"), pointer',
      //   'default':'url("/assets/img/cursorN.svg"),default'
      // },
      backgroundImage: {
        'hero-bg': "url('/assets/img/img1.png')",
        'section-bg':"url('/assets/img/imgbg1.png')"
      },
      lineHeight:{
        150:"105px",
        56:"56px"
      },
      fontSize:{
        80:"80px"
      }
    },
  },
  plugins: [],
}