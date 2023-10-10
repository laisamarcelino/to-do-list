import React from "react";
import { StylesGeneralTasks } from "./generalTasks.styles";
import circleDashed from "/circle-dashed.svg";
import playCicle from "/play-circle.svg";
import checkCircle from "/check-circle.svg";
import threeDots from "/dots-three-circle.svg"

const GeneralTasks = () => {
  return (
    <StylesGeneralTasks>
      <h1>Tarefas Gerais</h1>
      <section>
        <div className="task-align">
          <div className="icon-align">
            <img src={circleDashed} alt="circulo tracejado" />
            <h2 className="h2-1"> A fazer</h2>
          </div>

          <div className="task">
            <p>texto texto</p>
            <button className="more-button">
                <img src={threeDots} alt="circulo com reticencias em seu interior" />
            </button>
          </div>

          <button className="add-button">
            + Adicionar Tarefa
          </button>
          
        </div>

        <div className="task-align">
          <div className="icon-align">
            <img src={playCicle} alt="circulo com um sinal de play em seu interior"/>
            <h2 className="h2-2">Em progresso</h2>
          </div>
        </div>

        <div className="task-align">
          <div className="icon-align">
            <img src={checkCircle} alt="circulo com um sinal de completo em seu interior"/>
            <h2 className="h2-3">Finalizado</h2>
          </div>
        </div>

      </section>
    </StylesGeneralTasks>
  );
};

export default GeneralTasks;
