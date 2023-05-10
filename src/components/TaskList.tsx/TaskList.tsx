import { TasksStructure } from "../../store/types";
import TaskCard from "../TaskCard/TaskCard";
import TaskListStyled from "./TaskListStyled";

interface TaskListStructure {
  taskCard: TasksStructure[];
}

const TaskList = ({ taskCard }: TaskListStructure): JSX.Element => {
  return (
    <TaskListStyled className="task-list">
      <h1>ToDo List</h1>
      <ul className="task-list__container">
        {taskCard.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </TaskListStyled>
  );
};

export default TaskList;
