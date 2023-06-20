import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { Counter } from "./components/Counter";
import { TaskList } from "./components/task/TaskList";
import { PostList } from "./components/pages/PostList";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { PhotoList } from "./components/pages/PhotoList";
import { SelectColor } from "./components/SelectColor";
import { AppContext } from "./appContext";
import { AppLayout } from "./components/AppLayout";

function App() {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("red");
  return (
    <>
      <BrowserRouter>
        <AppContext.Provider value={{ color, setColor }}>
          <AppLayout></AppLayout>
        </AppContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
