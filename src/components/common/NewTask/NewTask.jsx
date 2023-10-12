import styled from "styled-components";

const NewTask = ({ texto, variant}) => {
  return (
    <>
      {variant == "task-todo" && <TodoDiv >{texto} </TodoDiv>}
      {variant == "task-done" && <DoneDiv >{texto}</DoneDiv>}
    </>
  );
};

export default NewTask;

const StyleNewTask = styled.div`
  border: solid 2px black;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 2%;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.black};
  background-color: transparent;
  width: 65%;
  height: 55px;
`;

const TodoDiv = styled(StyleNewTask)`
  
`;
const DoneDiv = styled(StyleNewTask)`
  opacity: 0.8;
  text-decoration: line-through;
  width: 70%;
`;
