import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// website -> tailwind
// webapp -> ant design
import { Counter } from "./components/Counter";
import { TaskList } from "./components/task/TaskList";

function App() {
  return (
    <>
      <div className="container">
        <Counter />
        <TaskList></TaskList>
      </div>
    </>
  );
}

export default App;
