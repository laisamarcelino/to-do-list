import styled from "styled-components"

export const StylesFooter = styled.section`

    background-color: ${(props) => props.theme.orange};
    padding: 2%;
    position: absolute;
    bottom: 0;
    width: 100%;

    .position-footer {
        position: relative;
    }

    p {
        text-align: center;
        color: white;
        font-weight: 1000;
        font-size: 20px;
    }

`
