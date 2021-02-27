
import {createContext, useState} from 'react'
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

}


interface ChallengesProviderProps {
    children : React.ReactNode
}
//estou falando que meu contexto segue o padrão de ChallengeContextData
export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengesProvider({children}:ChallengesProviderProps){
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(32)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow( (level+1)*4 , 2)

    function levelUp(){
        setLevel(level+1)
    }

    function startNewChallenge(){
        const randomChallengesIndex = Math.floor(Math.random()*challenges.length)
        const challenge = challenges[randomChallengesIndex]
        setActiveChallenge(challenge)
    }
    function resetChallenge(){
        setActiveChallenge(null)
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
                experienceToNextLevel}}>
            {children}
        </ChallengesContext.Provider>
    )
}