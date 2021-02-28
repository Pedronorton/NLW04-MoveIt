
import '../styles/global.css'

//Componente que envolve tudo
//aqui se coloca componentes que estarão em todas as páginas
function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

    
    )
}

export default MyApp
