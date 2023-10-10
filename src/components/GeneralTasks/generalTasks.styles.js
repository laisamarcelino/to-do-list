import styled from "styled-components"

export const StylesGeneralTasks = styled.section`
    
    margin: 5%;

    h1 {
        text-align: center;
        border-bottom: 3px solid  ${(props) => props.theme.gray};
        padding: 25px;
        margin-bottom: 50px;
        color: ${(props) => props.theme.blackLight};
    }

    section, .icon-align {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    .task-align {
        width: 100%;
    }

    .icon-align {
        width: fit-content;
        gap: 10px;
        margin-bottom: 20px;
    }

    .h2-1 {
        color: ${(props) => props.theme.gray};
    }
  
    .h2-2 {
        color: ${(props) => props.theme.greenLight};
    }

    .h2-3 {
        color: ${(props) => props.theme.jade};
    }

    .add-button, .task {
        border: 2px black solid;
        border-radius: 5px;
        padding: 10px;
        font-size: 15px;
        margin-bottom: 5%;
        font-family: 'Montserrat', sans-serif;
        background-color: transparent;
        width: 80%;
    }

    .task {
        position: relative;
    }

    .more-button {
        background-color: transparent;
        border: none;
        position: absolute;
        top: 4px;
        right: 16px;
    }

`