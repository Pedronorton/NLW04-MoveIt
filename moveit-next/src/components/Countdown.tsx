import styles from '../styles/components/Countdown.module.css'
import {useState, useEffect, useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import { CountdownContext } from '../contexts/CountdowContext'

let countdownTimeout : NodeJS.Timeout

export function Countdown(){
    const {
        minutes,
        seconds,
        hasFinished, 
        isActive,
        startCountDown, 
        resetCountDown
    } = useContext(CountdownContext)
   
    //padStart = senão tiver dois caracteres, então ele preenche a esqueda com um 0
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button 
                    disabled
                    //o retorno é uma string, então posso fazer isso
                    className={styles.countdownButton}
                    >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button 
                            type="button" 
                            //o retorno é uma string, então posso fazer isso
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`} 
                            onClick={resetCountDown}
                            >
                            Abandonar ciclo
                        </button>
                    ):(
                        <button 
                            type="button" 
                            className={styles.countdownButton} 
                            onClick={startCountDown}
                            >
                            Iniciar ciclo
                            
                        </button>
                    )}
                </>
            )}

            
        </div>
        
    )
}