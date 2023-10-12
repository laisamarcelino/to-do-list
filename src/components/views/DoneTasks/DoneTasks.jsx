import React from "react";
import { StylesDoneTasks } from "./doneTasks.styles";

import NewTask from "../../common/NewTask/NewTask";

const DoneTasks = () => {

  return (
    <StylesDoneTasks>
      <h1>Tarefas Concluídas</h1>
      {/* ALTERAR AQUI POIS ESSA SEÇÃO SO DEVE APARECER CASO ALGUMA TAREFA SEJA CONCLUÍDA
      APARECERÁ NO ON CLICK DO CONCLUIDA */}
      <section> 
        <NewTask texto="Exemplo" variant="task-done" />
        <NewTask texto="Exemplo" variant="task-done" />
      </section>

    </StylesDoneTasks>
  );
};

export default DoneTasks;
