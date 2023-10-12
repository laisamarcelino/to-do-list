import styled from "styled-components"

export const StylesGeneralTasks = styled.section`
    
    margin: 10%;

    h1 {
        text-align: center;
        border-bottom: 3px solid  ${(props) => props.theme.gray};
        padding: 25px;
        margin-bottom: 50px;
        color: ${(props) => props.theme.blackLight};
    }

    section{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .align-button {
        display: flex;
        justify-content: center;
    }

    .add-button {
        border: 2px black solid;
        border-radius: 5px;
        padding: 10px;
        font-size: 20px;
        margin-bottom: 5%;
        font-family: 'Montserrat', sans-serif;
        background-color: transparent;
        width: 60%;
        height: 55px;
        opacity: 0.7;
    }
`