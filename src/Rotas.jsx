import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./components/views/AddTask/AddTask";
import LandingPage from "./pages/LandingPage/LandingPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ColorTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GeneralTasks from "./pages/GeneralTasks/GeneralTasks";
import { TaskProvider } from "./pages/TaskContent/TaskContent";

const Rotas = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ColorTheme}>
        <GlobalStyle />
        <TaskProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/AddTask" element={<AddTask />} />
            <Route path="/GeneralTasks" element={<GeneralTasks />} />
          </Routes>
        </TaskProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Rotas;
