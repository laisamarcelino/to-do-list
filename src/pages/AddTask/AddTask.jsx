import React from "react";
// import { StylesAddTask } from "./";
import { Link, useNavigate } from "react-router-dom";

const AddTask = () => {
  return (
    // <StylesAddTask>
    <form action="">
      <Textfield
        nome="nome"
        label="none"
        type="text"
        required
        placeholder="maria"
        value={nome}
        onChange={(e) => setNome(e)}
      />
{/*       
      <input type="text" />
      <input type="date" />
      <input type="time" />
      <textarea cols="30" rows="10"></textarea> */}
    </form>
    // </StylesAddTask>
  );
};

export default AddTask;
