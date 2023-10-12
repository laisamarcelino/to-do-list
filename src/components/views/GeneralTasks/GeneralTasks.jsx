import React from "react";
import { StylesGeneralTasks } from "./generalTasks.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import NewTask from "../../common/NewTask/NewTask";

const GeneralTasks = () => {
  const navigate = useNavigate();

  const ButtonAdd = () => {
    navigate("/AddTask");
  };

  return (
    <StylesGeneralTasks>
      <h1>Minhas Tarefas</h1>
      {/* ALTERAR AQUI POIS ESSA SEÇÃO SO DEVE APARECER CASO SEJA INCLUIDA ALGUMA TAREFA 
      APARECERÁ NO ON CLICK DO ADD TASK */}
      <section> 
        <NewTask texto="Exemplo" variant="task-todo" />
        <Button texto="Concluída" variant="primary" width="20%" height="55px" />
        <Button texto="Editar" variant="secondary" width="20%" height="55px" />
      </section>

      <div className="align-button">
        <button className="add-button" onClick={ButtonAdd}>
          + Adicionar Tarefa
        </button>
      </div>
    </StylesGeneralTasks>
  );
};

export default GeneralTasks;
