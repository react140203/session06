import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { PhotoList } from "./pages/PhotoList";
import { PostList } from "./pages/PostList";
import { SelectColor } from "./SelectColor";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/auth/Login";
import { AppLayout } from "./AppLayout";

const PostDetails = lazy(() =>
  import("./pages/PostDetails").then(({ PostDetails }) => ({
    default: PostDetails,
  }))
);
const TaskList = lazy(() =>
  import("./task/TaskList").then(({ TaskList }) => ({
    default: TaskList,
  }))
);
const Counter = lazy(() =>
  import("./Counter").then(({ Counter }) => ({
    default: Counter,
  }))
);

export const BaseLayout = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route
            path=""
            element={
              <>
                <h1>Home</h1>
              </>
            }
          />
          <Route path="posts" element={<PostList></PostList>} />
          <Route
            path="posts/:id"
            element={
              <Suspense fallback={<>Loading</>}>
                <PostDetails />
              </Suspense>
            }
          />
          <Route path="photos" element={<PhotoList></PhotoList>} />
          <Route path="color" element={<SelectColor></SelectColor>} />
          <Route
            path="counter"
            element={
              <Suspense fallback={<>Loading</>}>
                <Counter />
              </Suspense>
            }
          />
          <Route
            path="tasks"
            element={
              <Suspense fallback={<>Loading</>}>
                <TaskList />
              </Suspense>
            }
          />
          <Route path="404" element={<NotFound></NotFound>} />
        </Route>
        <Route path="*" element={<Navigate to="/404"></Navigate>} />
      </Routes>
    </>
  );
};
