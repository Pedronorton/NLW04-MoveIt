import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdowContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completeChallenge,} = useContext(ChallengesContext)
    const {resetCountDown} = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        completeChallenge()
        resetCountDown()
    }
    function handleChallengeFail(){
        
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <main>Novo desafio</main>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailButton}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalize um cilco para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"></img>
                    Avance de level completando desafios
                </p>
            </div>
            )}
            
        </div>
    )
}