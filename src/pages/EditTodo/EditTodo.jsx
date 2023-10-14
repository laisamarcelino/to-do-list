import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField, DialogActions } from "@mui/material";

const EditTaskDialog = ({ open, task, onClose, onSave }) => {
  const [editedTask, setEditedTask] = useState(
    task ? { ...task } : { title: "", date: "", time: "", description: "" }
  );

  useEffect(() => {
    if (task) {
      setEditedTask({ ...task });
    }
  }, [task]);

  const handleSave = () => {
    onSave(editedTask);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Editar Tarefa</DialogTitle>

      <DialogContent>
        {editedTask && (
          <>
            <label htmlFor="titleID"> Título: </label>
            <TextField
              type="text"
              id="titleID"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
            />
            <label htmlFor="dateID"> Data: </label>
            <TextField
              type="date"
              id="dateID"
              value={editedTask.date}
              onChange={(e) =>
                setEditedTask({ ...editedTask, date: e.target.value })
              }
            />
            <label htmlFor="timeID"> Horário: </label>
            <TextField
              type="time"
              id="timeID"
              value={editedTask.time}
              onChange={(e) =>
                setEditedTask({ ...editedTask, time: e.target.value })
              }
            />
            <label htmlFor="descriptionID"> Descrição: </label>
            <TextField
              id="descriptionID"
              placeholder="Digite algo..."
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
            />
          </>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSave}>Salvar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskDialog;
