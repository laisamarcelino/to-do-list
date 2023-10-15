import styled from "styled-components"

export const StyleSearch = styled.main`

    display: flex;
    flex-direction: column;
    margin: 10px 10%;

    section {
        display: flex;
        justify-content: center;
    }

    .search-bar {
        background-color: ${(props) => props.theme.white};
        border: 2px solid;
        border-radius: 25px;
        padding: 20px;
        margin: 20px 0px;
        width: auto;
        height: 55px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 50px;
    }

    input {
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        width: auto;
        padding: 3px;
    }
    
    .search-button {
        border: none;
        background-color: ${(props) => props.theme.white};
    }

    .align-results {
        display: flex;
        justify-content: space-evenly;
    }

    .Link-task {
        width: 20%;
        height: 55px;
        background-color: ${(props) => props.theme.jade};
        border-radius: 12px;
        justify-content: center;
        display: flex;
    }

    .goto-task {
        border: none;
        background-color: transparent;
        color: ${(props) => props.theme.white};
        font-size: 15px;
        font-family: "Montserrat", sans-serif;
    }

    .clean-results{
        background-color: transparent;
        color:  ${(props) => props.theme.jade};
        border: none;
        text-decoration: underline;
        font-size: 15px;
    }
`