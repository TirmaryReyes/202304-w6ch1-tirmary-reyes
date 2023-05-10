import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadTasksActionCreator } from "../../store/tasks/tasksSlice";
import TaskList from "../TaskList.tsx/TaskList";

const App = (): JSX.Element => {
  const { getTasks } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      dispatch(loadTasksActionCreator(tasks));
    })();
  }, [dispatch, getTasks]);

  const { tasks } = useAppSelector((state) => state.tasks);

  return <TaskList taskCard={tasks} />;
};

export default App;
