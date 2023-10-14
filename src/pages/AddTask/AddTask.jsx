import React, { useState } from "react";
import { StylesAddTask } from "./addTask.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import { useTaskContext } from '../TaskContent/TaskContent';

const AddTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTaskContext();

  const todoCreate = (e) => {
    e.preventDefault(); 
    const todoObj = {
      title: title,
      date: date,
      time: time,
      description: description,
      id: Math.random().toString(),
    };

    addTask(todoObj);
    navigate("/");
  };

  return (
    <StylesAddTask>
      <form onSubmit={todoCreate}>
        <div className="title">
          <input
            type="text"
            name="titleID"
            className="title-input"
            placeholder="Título da Tarefa"
            id="titleID"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <section>
          <div className="align-datetime">
            <div className="align-text-input">
              <label htmlFor="dateID"> Data: </label>
              <input
                type="date"
                id="dateID"
                className="input-datetime"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="align-text-input">
              <label htmlFor="timeID"> Horário: </label>
              <input
                type="time"
                className="input-datetime"
                id="timeID"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="align-description">
            <label htmlFor="descriptionID"> Descrição: </label>
            <textarea
              id="descriptionID"
              placeholder="Digite algo..."
              className="description"
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </section>
        <div className="align-button">
          <Button
            texto="Salvar"
            variant="primary"
            width="20%"
            height="55px"
            value={true}
            type="submit"
          />
          <Button
            texto="Cancelar"
            variant="secondary"
            width="20%"
            height="55px"
            onClick={() => navigate("/")}
          />
        </div>
      </form>
    </StylesAddTask>
  );
};

export default AddTask;
