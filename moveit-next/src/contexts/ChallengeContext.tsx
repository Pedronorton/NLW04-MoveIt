
import {createContext, useEffect, useState} from 'react'
import challenges from '../../challenges.json'

interface Challenge{
    type: 'body' | 'eye',
    description: string,
    amount: number
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;

}


interface ChallengesProviderProps {
    children : React.ReactNode
}
//estou falando que meu contexto segue o padrão de ChallengeContextData
export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({children}:ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow( (level+1)*4 , 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp(){
        setLevel(level+1)
    }

    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random()*challenges.length)
        const challenge = challenges[randomChallengesIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();
        if(Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount}`,
                
            })
        }
    }
    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if(!activeChallenge){
            return 
        }
        const {amount} = activeChallenge
        let finalExperience = currentExperience + amount

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()

        }
        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)


    }

    return(
        <ChallengesContext.Provider 
            value={{level,
                levelUp,
                challengesCompleted,
                currentExperience,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge}}>
            {children}
        </ChallengesContext.Provider>
    )
}