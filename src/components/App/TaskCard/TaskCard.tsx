import { TasksStructure } from "../../../types";
import TaskCardStyled from "./TaskCardStyled";

interface TaskCardProps {
  task: TasksStructure;
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  return (
    <TaskCardStyled className="task-container">
      <h2 className="task-container__title">{task.name}</h2>
      <input type="checkbox" name="isDone" id="isDone" />
      <label htmlFor="isDone">{task.isDone}</label>
    </TaskCardStyled>
  );
};

export default TaskCard;
