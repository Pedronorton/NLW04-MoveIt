import styles from '../styles/components/CompletedChallanges.module.css'

import {useContext} from 'react'
import { ChallengesContext} from '../contexts/ChallengeContext'

export function CompletedChallanges() {

    const {challengesCompleted} = useContext(ChallengesContext)

    return (
        <div className={styles.CompletedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}