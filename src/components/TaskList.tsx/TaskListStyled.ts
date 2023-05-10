import styled from "styled-components";

const TaskListStyled = styled.ul.attrs({ className: "Task-list" })`
  display: grid;
  grid-template-columns: repeat(1, 260px);
  grid-gap: 30px;
  margin-block: 30px;
  grid-auto-rows: minmax(260px, auto);

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 260px);
  }
  @media screen and (min-width: 875px) {
    grid-template-columns: repeat(3, 260px);
  }
`;

export default TaskListStyled;
