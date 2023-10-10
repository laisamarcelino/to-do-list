import { createGlobalStyle } from "styled-components";
//is a component

export const GlobalStyle = createGlobalStyle`
//reset CSS
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        width: 100%;
        min-height: 100vh;
        font-family: 'Montserrat', sans-serif;
    }
    
    button,input, textarea, select{
        outline: none;
    }

    button, a{
        cursor: pointer;
    }

    a, li{
        text-decoration: none;
        list-style: none;
        color: inherit;
    }

    h1 {
        font-size: 40px;
    }

    h2 {
        font-size: 30px;
    }

    p {
        font-size: 15px;
    }
`