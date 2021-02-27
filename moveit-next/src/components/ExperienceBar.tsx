import styles from '../styles/components/ExperienceBar.module.css'
import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
export function ExperienceBar () {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

    const percentToNextLevel = Math.round((currentExperience*100) / experienceToNextLevel)

    return(
        <header className={styles.experienceBar}>
            <span>{currentExperience} xp</span>
            <div>
                {/* Coisas que mudam de estilo é melhor deixar inline */}
                {/* É possível alterar pegando o elemento por id, mas assim fica mais fácil */}
                <div style={{width: `${percentToNextLevel}%`}}> 
                    <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
                        {currentExperience}xp
                    </span>
                </div>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}