import React from "react";
import { StylesHeader } from "../Header/header.styles";
import logo from "/list-checks.svg";

const Header = () => {

  return (
    <StylesHeader className={"header"}>
      <nav className={"nav-bar"}>
        <div className="align-logo">
          <img
            className="logo"
            src={logo}
            alt="icone de tarefas feitas, logo do site"
          />
          <p>TO-DO LIST</p>
        </div>
       
      </nav>
    </StylesHeader>
  );
};

export default Header;
