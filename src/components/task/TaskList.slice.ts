import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "./ITask";

interface TaskListState {
  taskList: ITask[];
}

const initialState: TaskListState = {
  taskList: [
    { id: 1, title: "One", done: true },
    { id: 2, title: "iki", done: false },
    { id: 3, title: "se", done: false },
    { id: 4, title: "quad", done: true },
  ],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {},
});

export default taskListSlice.reducer;
