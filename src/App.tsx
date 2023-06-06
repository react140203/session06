import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { Counter } from "./components/Counter";
import { TaskList } from "./components/task/TaskList";
import { PostList } from "./components/pages/PostList";
import { useState } from "react";
import { PhotoList } from "./components/pages/PhotoList";
import { SelectColor } from "./components/SelectColor";
import { AppContext } from "./appContext";

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <>
      <AppContext.Provider value={{ color, setColor }}>
        <SelectColor />
        <button onClick={() => setToggle(!toggle)}>toggle posts</button>
        {toggle && <PostList></PostList>}
        <PhotoList></PhotoList>
        <Counter />
        <TaskList></TaskList>
      </AppContext.Provider>
    </>
  );
}

export default App;
