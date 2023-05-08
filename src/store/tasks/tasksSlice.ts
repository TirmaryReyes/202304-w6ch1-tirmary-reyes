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
  name: "toDo",
  initialState: initialState,
  reducers: {
    loadToDo: (
      state: TasksStateStructure,
      action: PayloadAction<TasksStructure[]>
    ) => {
      state.tasks = action.payload;
    },
  },
});

export const { loadToDo } = tasksSlice.actions;

export default tasksSlice.reducer;
