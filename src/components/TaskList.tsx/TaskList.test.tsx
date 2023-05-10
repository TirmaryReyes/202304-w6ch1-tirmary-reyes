import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show heading a list of tasks", () => {
      const expectedHeading = "ToDo List";
      render(
        <TaskList
          taskCard={[
            {
              id: 54,
              name: "supervise equipment maintenance",
              isDone: true,
            },
          ]}
        />
      );

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
