import '../styles/globals.css'

// IMPACT GLOBAL ao ser importado no app.js
import './css/integration1.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
