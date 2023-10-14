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

    .div-task {
        display: flex;
        justify-content: space-between;
    }

    .completed {
        opacity: 0.7;
        text-decoration: line-through;
    }

    .clean-results{
        background-color: transparent;
        color:  ${(props) => props.theme.jade};
        border: none;
        text-decoration: underline;
        font-size: 15px;
    }
`