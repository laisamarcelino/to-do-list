// SearchTask.js
import React, { useState } from "react";
import { StyleSearch } from "./searchTask.styles";
import icon_search from "/magnifying-glass.svg";
import { useTaskContext } from "../TaskContent/TaskContent";
import NewTask from "../../components/common/NewTask/NewTask";
import { Link } from "react-router-dom";

const SearchTask = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { tasks, searchTasks } = useTaskContext();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = searchTasks(searchTerm);
    setSearchResults(results);
  };

  const handleClearResults = () => {
    setSearchResults([]);
  };

  const handleScrollToTask = (taskId) => {
    const element = document.getElementById(taskId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
        <div key={task.id} className="align-results">
          <NewTask
            variant="task-todo"
            title={task.title}
            date={task.date}
            time={task.time}
            description={task.description}
          />
          <Link className="Link-task" to={`/#${task.id}`}>
            <button
              className="goto-task"
              id={`goto-${task.id}`}
              onClick={() => handleScrollToTask(task.id)}
            >
              Ir para a tarefa
            </button>
          </Link>
        </div>
      ))}
      <button className="clean-results" onClick={handleClearResults}>
        Limpar respostas
      </button>
    </StyleSearch>
  );
};

export default SearchTask;
