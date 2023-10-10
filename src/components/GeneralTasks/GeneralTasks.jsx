import React from 'react'
import {StylesGeneralTasks} from './generalTasks.styles'
import circleDashed from '/circle-dashed.svg'
import playCicle from '/play-circle.svg'
import checkCircle from '/check-circle.svg'

const GeneralTasks = () => {
    return (
        <StylesGeneralTasks>
            <section>
                <h1>Tarefas Gerais</h1>
                <div className={section}>

                    <div className={column}>
                        <h2>A fazer</h2>
                        <img src={circleDashed} alt='circulo tracejado'/>
                    </div>

                    <div>
                        <h2>Em progresso</h2>
                        <img src={playCicle} alt='circulo com um sinal de play em seu interior'/>
                    </div>

                    <div>
                        <h2>Finalizado</h2>
                        <img src={checkCircle} alt='circulo com um sinal de completo em seu interior'/>
                    </div>
                
                </div>
                
            </section>
        </StylesGeneralTasks>
    )
}

export default GeneralTasks