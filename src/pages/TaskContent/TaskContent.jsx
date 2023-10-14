import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const useTaskContext = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

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
      return {
        ...task,
        title: updatedTask.title,
        date: updatedTask.date,
        time: updatedTask.time,
        description: updatedTask.description,
      };
    }
    return task;
  });
  setTasks(updatedTasks);
};

  // Função para pesquisar tarefas
  const searchTasks = (searchTerm) => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, doneTask, updateTasks, searchTasks }}
    >
      {children}
    </TaskContext.Provider>
  );
}
