import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "./ITask";

interface TaskListState {
  value: ITask[];
}

const initialState: TaskListState = {
  value: [
    { id: 1, title: "One", done: true },
    { id: 2, title: "iki", done: false },
    { id: 3, title: "se", done: false },
    { id: 4, title: "quad", done: true },
  ],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const task = state.value.find((x) => x.id === action.payload);
      if (task) task.done = !task.done;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((x) => x.id !== action.payload);
    },
    add: (state, action: PayloadAction<string>) => {
      state.value.push({
        id: Math.random(),
        title: action.payload,
        done: false,
      });
    },
  },
});

export const { toggle, add, remove } = taskListSlice.actions;
export default taskListSlice.reducer;
