export function ExperienceBar () {
    return(
        <header className="experience-bar">
            <span>0 xp</span>
            <div>
                {/* Coisas que mudam de estilo é melhor deixar inline */}
                {/* É possível alterar pegando o elemento por id, mas assim fica mais fácil */}
                <div style={{width: '60%'}}> 
                    <span className="current-experience" style={{ left: '60%'}}>
                        60%
                    </span>
                </div>
            </div>
            <span>600 xp</span>
        </header>
    )
}