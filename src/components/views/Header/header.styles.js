import styled from "styled-components"

export const StylesHeader = styled.header`
    .nav-bar {
        background-color: ${(props) => props.theme.orange}; 
        padding: 2%;
    }

    .logo {
        width: 45px;
    }

    .align-logo {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    p {
        color: ${(props) => props.theme.white};
        font-weight: 1000;
        font-size: 20px;
    }

    .search-bar {
        background-color: ${(props) => props.theme.white};
        border: none;
        border-radius: 25px;
        padding: 20px;
        width: 30%;
        height: 55px;
        
    }
   

    .nav-bar, .search-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .form {
        border: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
    }
    
    .search-button {
        border: none;
        background-color: ${(props) => props.theme.white};
    }
    
`