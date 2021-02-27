
import {ExperienceBar} from '../components/ExperienceBar.tsx'
import Head from 'next/head'
import { Profile } from '../components/Profile.tsx'

import styles from '../styles/pages/Home.module.css'
import { CompletedChallanges } from '../components/CompletedChallanges.tsx'
import {Countdown} from '../components/Countdown.tsx'
import {ChallengeBox} from '../components/ChallengeBox.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Inicio | Move.it
        </title>
      </Head>
      <ExperienceBar></ExperienceBar>
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
    </div>
  )
}
