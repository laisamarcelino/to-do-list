import styled from "styled-components"

export const StylesHeader = styled.header`
    .nav-bar {
        background-color: #FF8811; //mudar pro props puxando do tema
        padding: 2%;
    }

    .nav-button {
        border: none;
        background-color: #FF8811;
    }

    .search-bar {
        background-color: #FFFFFF;
        border: #000000 solid 2px;
        border-radius: 12px;
        padding: 20px;
        width: 30%;
        height: 55px;
        
    }
    .search-button {
        border: none;
        background-color: #FFFFFF;
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