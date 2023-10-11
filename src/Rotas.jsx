import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTask from './pages/AddTask/AddTask'
import LandingPage from './pages/LandingPage/LandingPage'
import { GlobalStyle } from './styles/GlobalStyles'
import { ColorTheme } from './styles/theme'
import { ThemeProvider } from 'styled-components'


const Rotas = () => {
  return (

    <BrowserRouter>
      <ThemeProvider theme={ColorTheme}>
        <GlobalStyle />
        <Routes>
          <Route path='/AddTask' element={<AddTask />} />
          <Route path='/' element={<LandingPage />} />
        </Routes>

      </ThemeProvider>
    </BrowserRouter>

  )
}

export default Rotas
