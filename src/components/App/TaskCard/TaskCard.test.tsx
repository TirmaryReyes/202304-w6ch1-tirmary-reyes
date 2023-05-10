import { render, screen } from "@testing-library/react";
import TaskCard from "./TaskCard";
import { TasksStructure } from "../../../types";
import { Provider } from "react-redux";
import { store } from "../../../store";

describe("Given a TaskCard component", () => {
  describe("When it receives a 'do inventory' task", () => {
    test("Then it should show 'do inventory' name inside a heading", () => {
      const expectedHeading = "do inventory";

      const choresToDo: TasksStructure = {
        name: "do inventory",
        isDone: true,
        id: 4,
      };

      render(
        <Provider store={store}>
          <TaskCard task={choresToDo} />
        </Provider>
      );

      const taskName = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(taskName).toBeInTheDocument();
    });
  });
});
