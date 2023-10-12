import React from "react";
import { StylesAddTask } from "./addTask.styles";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";

const AddTask = () => {

  const navigate = useNavigate();

  const ButtonReturn = () => {
    navigate("/");
  };

  return (
    <StylesAddTask>
      <div className="title">
        <form action="">
          <input
            type="text"
            className="title-input"
            placeholder="        Título da Tarefa"
          />
        </form>
      </div>

      <section>
        <form action="">
          <div className="align-datetime">
            <div className="align-text-input">
              <label htmlFor="date"> Data: </label>
              <input type="date" className="input-datetime" />
            </div>

            <div className="align-text-input">
              <label htmlFor="time"> Horário: </label>
              <input type="time" className="input-datetime" />
            </div>
          </div>

          <div className="align-description">
            <label htmlFor="description"> Descrição: </label>
            <textarea
              placeholder="Digite algo..."
              className="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </form>
      </section>

      <div className="align-button">
        <Button texto="Salvar" variant="primary" width="20%" height="55px" />
        <Button texto="Cancelar" variant="secondary" width="20%" height="55px" onClick={ButtonReturn}/>
      </div>
    </StylesAddTask>
  );
};

export default AddTask;
