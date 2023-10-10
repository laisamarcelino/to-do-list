import styled from "styled-components"

export const StylesHeader = styled.header`
    .nav-bar {
        background-color: ${(props) => props.theme.orange}; 
        padding: 2%;
    }

    .nav-button {
        border: none;
        background-color: ${(props) => props.theme.orange};
    }

    .search-bar {
        background-color: ${(props) => props.theme.white};
        border: black solid 2px;
        border-radius: 12px;
        padding: 20px;
        width: 30%;
        height: 55px;
        
    }
    .search-button {
        border: none;
        background-color: ${(props) => props.theme.white};
    }

    .nav-bar, .search-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .form {
        border: none;
        font-family: 'Montserrat', sans-serif;
    }
`