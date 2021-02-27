import { render } from "react-dom"

import styles from '../styles/components/Profile.module.css'
import { useContext } from 'react'
import { ChallengesContext } from "../contexts/ChallengeContext";

export function Profile()  {
    const {level} = useContext(ChallengesContext)
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Pedronorton.png" alt="Pedro Paiva"></img>
            <div>
                <strong>Pedro Paiva</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    );

}