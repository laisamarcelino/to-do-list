import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const EditTaskDialog = ({ open, task, onClose, onSave, updateTasks }) => {
  const [editedTask, setEditedTask] = useState(task ? { ...task } : { title: '', date: '', time: '', description: '' });

  const handleSave = () => {
    // Remova a chamada para onSave aqui

    // Atualize as tarefas no componente pai
    updateTasks(editedTask); // Passe a tarefa atualizada para a função de atualização

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div>
        <DialogTitle>Editar Tarefa</DialogTitle>
      </div>
        
      <DialogContent>
        <label htmlFor="titleID"> Título: </label>
        <input
          type="text"
          id="titleID"
          value={editedTask.title}
          onChange={(e) =>
            setEditedTask({ ...editedTask, title: e.target.value })
          }
        />
        <label htmlFor="dateID"> Data: </label>
        <input
          type="date"
          id="dateID"
          value={editedTask.date}
          onChange={(e) =>
            setEditedTask({ ...editedTask, date: e.target.value })
          }
        />
        <label htmlFor="timeID"> Horário: </label>
        <input
          type="time"
          id="timeID"
          value={editedTask.time}
          onChange={(e) =>
            setEditedTask({ ...editedTask, time: e.target.value })
          }
        />
        <label htmlFor="descriptionID"> Descrição: </label>
        <textarea
          id="descriptionID"
          placeholder="Digite algo..."
          cols="30"
          rows="10"
          value={editedTask.description}
          onChange={(e) =>
            setEditedTask({ ...editedTask, description: e.target.value })
          }
        />
        <br />
        <Button onClick={handleSave}>Salvar</Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditTaskDialog;
