import styled from "styled-components"

export const StylesAddTask = styled.main`
    
    margin: 5% 10%;
    border: solid black 2px;
    border-radius: 12px;
    background-color: ${(props) => props.theme.grayLight};
    padding: 30px;

    .title {
        display: flex;
        justify-content: center;
        border-bottom: 3px solid  ${(props) => props.theme.gray};
        padding: 25px;
        margin-bottom: 50px;
    }
    
    .title-input {
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 36px;
        color: ${(props) => props.theme.black};
        font: bold;
        background-color: transparent;
    }

    .align-datetime {
        display: flex;
        justify-content: space-around;
        margin-bottom: 40px;
    }

    .align-text-input {
        display: flex;
        gap: 20px;
        align-items: center;
    }

    label {
        font-size: 20px;
    }

    .align-description {
        display: flex;
        gap: 20px;
        flex-direction: column;
    }

    .input-datetime, .description {
        border-radius: 20px;
        padding: 15px;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    .input-datetime {
        background-color: ${(props) => props.theme.greenLight};
        border-color: ${(props) => props.theme.jade};
    }

    .align-button {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`
    