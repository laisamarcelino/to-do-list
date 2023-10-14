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

    .nav-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`