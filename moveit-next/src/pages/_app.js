
import '../styles/global.css'
import {ChallengesProvider} from '../contexts/ChallengeContext.tsx'
//Componente que envolve tudo
//aqui se coloca componentes que estarão em todas as páginas
function MyApp({ Component, pageProps }) {
  return (

    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>

    
    )
}

export default MyApp
