import FooterLayout from '../components/layout/Footer'
import HeaderLayout from '../components/layout/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
         <HeaderLayout />
         <Component {...pageProps} />
         <FooterLayout />
         </>
}

export default MyApp
