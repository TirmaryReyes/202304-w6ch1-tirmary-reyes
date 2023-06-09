import { renderHook } from "@testing-library/react";
import useApi from "./useApi";
import { TasksStructure } from "../store/types";
import tasksMocks from "../mocks/tasksMocks";

describe("Given the getTasks function", () => {
  describe("When it is invoked", () => {
    test("Then it should return a list of tasks", async () => {
      const expectedList: TasksStructure[] = tasksMocks;

      const {
        result: {
          current: { getTasks },
        },
      } = renderHook(() => useApi());

      const tasksList: TasksStructure[] = await getTasks();

      expect(tasksList).toStrictEqual(expectedList);
    });
  });
});
