import styled from "styled-components"

export const StylesDoneTasks = styled.section`
     
    margin: 10%;

    h1 {
        text-align: center;
        border-bottom: 3px solid  ${(props) => props.theme.gray};
        padding: 25px;
        margin-bottom: 50px;
        color: ${(props) => props.theme.blackLight};
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`