import styled from "styled-components";
import calendar from "/calendar.svg";
import clock from "/clock.svg";

const NewTask = ({ variant, title, date, time, description}) => {
  return (
    <>
      {variant == "task-todo" && (
        <TodoDiv>
          <div>
            {title}: {description}
          </div>
          <section className="align-section">
            <div className="align-icon">
              <img src={calendar} alt="icone de tarefas feitas, logo do site" />
              {date}
            </div>
            <div className="align-icon">
              <img src={clock} alt="icone de tarefas feitas, logo do site" />
              {time}
            </div>
          </section>
        </TodoDiv>
      )}
    </>
  );
};

export default NewTask;

const StyleNewTask = styled.div`
  border: solid 2px black;
  border-radius: 5px;
  padding: 10px;
  font-size: 25px;
  margin-bottom: 2%;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.black};
  width: 65%;
  height: 55px;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .align-icon {
    display: flex;
    align-items: center;
    font-size: small;
    gap: 5px;
  }

  .align-section {
    gap: 10px;
  }
`;
const TodoDiv = styled(StyleNewTask)`
  background-color: transparent;
`;
