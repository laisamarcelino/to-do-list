import React from 'react'
import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage'
import { GlobalStyle } from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { ColorTheme } from '../src/styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={ColorTheme}>
        <GlobalStyle/>
        <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
)
