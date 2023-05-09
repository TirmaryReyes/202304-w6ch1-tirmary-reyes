import {
  TasksStateStructure,
  TasksStructure,
  loadTasksActionCreator,
  tasksReducer,
} from "./tasksSlice";

describe("Given a tasksSlice reducer", () => {
  describe("When it receives an empty tasks list and a load action with two task", () => {
    test("Then it should return a tasks list with two tasks", () => {
      const currentEmptyTask: TasksStructure[] = [];
      const emptyState: TasksStateStructure = {
        tasks: currentEmptyTask,
      };

      const newTasks: TasksStructure[] = [
        {
          id: 1,
          name: "Task 1",
          isDone: false,
        },
        {
          id: 2,
          name: "Task 2",
          isDone: true,
        },
      ];

      const newExpectedState: TasksStateStructure = {
        ...currentEmptyTask,
        tasks: newTasks,
      };

      const loadTaskAction = loadTasksActionCreator(newTasks);

      const expected = tasksReducer(emptyState, loadTaskAction);

      expect(expected).toStrictEqual(newExpectedState);
    });
  });
});
