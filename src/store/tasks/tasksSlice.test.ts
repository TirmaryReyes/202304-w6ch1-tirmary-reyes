import tasksReducer, { loadToDo, TasksStateStructure } from "./tasksSlice";

describe("Given a tasksSlice reducer", () => {
  describe("When it receives a loadToDo action", () => {
    test("Then it should update the tasks list in the state and not modify the original state", () => {
      const newTasks = [
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

      const action = loadToDo(newTasks);
      const state: TasksStateStructure = {
        tasks: [],
      };

      const newState = tasksReducer(state, action);

      expect(newState.tasks).toEqual(newTasks);
    });
  });
});
