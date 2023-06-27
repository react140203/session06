import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/Counter.slice";
import taskListReducer from "../components/task/TaskList.slice";
// ...

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    taskList: taskListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
