// GeneralTasks.js
import React from "react";
import { StylesGeneralTasks } from "./generalTasks.styles";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../TaskContent/TaskContent";
import NewTask from "../../components/common/NewTask/NewTask";
import Button from "../../components/common/Button/Button";
import EditTaskDialog from "../EditTodo/EditTodo";

const GeneralTasks = () => {
  const navigate = useNavigate();
  const { tasks, deleteTask, doneTask, updateTasks, setTasks } = useTaskContext();
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [editedTask, setEditedTask] = React.useState(null);

  const ButtonAdd = () => {
    navigate("/AddTask");
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleDone = (taskId) => {
    doneTask(taskId);
  };

  const openEditDialog = (task) => {
    setEditedTask(task);
    setDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditedTask(null);
    setDialogOpen(false);
  };

  const handleEdit = (updatedTask) => {
    updateTasks(updatedTask);
    setDialogOpen(false); // Feche o diálogo após a edição
  };

  return (
    <StylesGeneralTasks>
      <h1>Minhas Tarefas</h1>

      {tasks.map((task) => (
        <div
          key={task.id}
          id={task.id}
          className={`div-task ${task.completed ? "completed" : ""}`}
        >
          <NewTask
            variant="task-todo"
            title={task.title}
            date={task.date}
            time={task.time}
            description={task.description}
          />
          <Button
            variant="primary"
            texto="Concluída"
            onClick={() => handleDone(task.id)}
          />
          <Button
            variant="secondary"
            texto="Editar"
            onClick={() => openEditDialog(task)}
          />
          <Button
            variant="third"
            texto="Excluir"
            onClick={() => handleDelete(task.id)}
          />
        </div>
      ))}

      <div className="align-button">
        <button className="add-button" onClick={ButtonAdd}>
          + Adicionar Tarefa
        </button>
      </div>

      <EditTaskDialog
        open={isDialogOpen}
        task={editedTask}
        onSave={handleEdit}
        onClose={closeEditDialog}
        
      />
    </StylesGeneralTasks>
  );
};

export default GeneralTasks;
