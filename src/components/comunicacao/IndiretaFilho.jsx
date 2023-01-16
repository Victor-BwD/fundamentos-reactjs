import React from "react";

export default props => {
    const idadeMin = 50
    const idadeMax = 70
    const GerarIdade = () => parseInt(Math.random() * (idadeMax - idadeMin)) + idadeMin

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={e => props.quandoClicar('Jão', GerarIdade(), true)}>Fornecer Informações</button>
        </div>
    )
}