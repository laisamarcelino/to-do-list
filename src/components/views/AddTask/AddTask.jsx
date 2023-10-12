import React, { useState } from "react";
import { StylesAddTask } from "./addTask.styles";
import { useNavigate } from "react-router-dom";
import Button from "../../common/Button/Button";
import { useTaskContext } from '../../../pages/TaskContent/TaskContent';

const AddTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useTaskContext();

  const todoCreate = () => {
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
      <div className="title">
        <form action="">
          <input
            type="text"
            name="titleID"
            className="title-input"
            placeholder="Título da Tarefa"
            id="titleID"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </div>
      <section>
        <form>
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
        </form>
      </section>
      <div className="align-button">
        <Button
          texto="Salvar"
          variant="primary"
          width="20%"
          height="55px"
          value={true}
          onClick={todoCreate}
        />
        <Button
          texto="Cancelar"
          variant="secondary"
          width="20%"
          height="55px"
          onClick={() => navigate("/")}
        />
      </div>
    </StylesAddTask>
  );
};

export default AddTask;
