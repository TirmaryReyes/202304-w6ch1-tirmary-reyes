import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TasksStructure {
  id: number;
  name: string;
  isDone: boolean;
}

export interface TasksStateStructure {
  tasks: TasksStructure[];
}

const initialState: TasksStateStructure = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    loadTasks: (currentTasks, action: PayloadAction<TasksStructure[]>) => ({
      ...currentTasks,
      tasks: [...action.payload],
    }),
  },
});

export const { loadTasks: loadTasksActionCreator } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
