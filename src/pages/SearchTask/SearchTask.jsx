import React, { useState } from "react";
import { StyleSearch } from "./searchTask.styles";
import icon_search from "/magnifying-glass.svg";
import { useTaskContext } from "../TaskContent/TaskContent";
import NewTask from "../../components/common/NewTask/NewTask";
import Button from "../../components/common/Button/Button";
import EditTaskDialog from "../EditTodo/EditTodo";

const SearchTask = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchTasks } = useTaskContext();
  const [searchResults, setSearchResults] = useState([]);
  const { tasks, deleteTask, doneTask } = useTaskContext();

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  const handleDone = (taskId) => {
    doneTask(taskId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const results = searchTasks(searchTerm);
    setSearchResults(results);
  };

  const handleClearResults = () => {
    setSearchResults([]);
  };

  return (
    <StyleSearch>
      <section>
        <div className={"search-bar"}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="search-task"
              placeholder="Buscar tarefa"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <button className="search-button" onClick={handleSearch}>
            <img src={icon_search} alt="imagem de uma lupa para pesquisa" />
          </button>
        </div>
      </section>

      {searchResults.map((task) => (
        <div
          key={task.id}
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
      <button className="clean-results" onClick={handleClearResults}>Limpar respostas</button>
    </StyleSearch>
  );
};

export default SearchTask;
