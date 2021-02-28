
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { Profile } from '../components/Profile.tsx'
import {ExperienceBar} from '../components/ExperienceBar.tsx'
import { CompletedChallanges } from '../components/CompletedChallanges.tsx'
import {Countdown} from '../components/Countdown.tsx'
import {ChallengeBox} from '../components/ChallengeBox.tsx'

import styles from '../styles/pages/Home.module.css'

import {CountdownProvider} from '../contexts/CountdowContext'
import {ChallengesProvider} from '../contexts/ChallengeContext.tsx'


export default function Home(props) {
  
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >

      <div className={styles.container}>
        <Head>
          <title>
            Inicio | Move.it
          </title>
        </Head>
        <ExperienceBar></ExperienceBar>
        <CountdownProvider>
          <section>
            <div >
              <Profile/>
              <CompletedChallanges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>

  )
}
//faz essa chamada antes de construir a página 
//a camada do next passando dados pro react
//tudo que é executado nesta função é executado no servidor node e não no browser
export const getServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {

    props: {

      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)

    }

  }

}