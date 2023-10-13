import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]); // Inicialize tasks como uma matriz vazia

  // Função para adicionar uma nova tarefa
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Função para excluir uma tarefa
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Função para marcar uma tarefa como concluída
  const doneTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Função para atualizar uma tarefa
  const updateTasks = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, doneTask, updateTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
