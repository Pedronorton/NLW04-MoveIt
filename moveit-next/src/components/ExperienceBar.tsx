import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar () {
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                {/* Coisas que mudam de estilo é melhor deixar inline */}
                {/* É possível alterar pegando o elemento por id, mas assim fica mais fácil */}
                <div style={{width: '60%'}}> 
                    <span className={styles.currentExperience} style={{ left: '60%'}}>
                        60%
                    </span>
                </div>
            </div>
            <span>600 xp</span>
        </header>
    )
}