import { memo, useState } from "react";
import { add } from "./TaskList.slice";
import { useAppDispatch } from "../../redux/hooks";

export const TaskInput = memo(() => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const dispatch = useAppDispatch();
  const addFnc = () => {
    dispatch(add(newTaskTitle));
    setNewTaskTitle("");
  };
  return (
    <>
      <input
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      ></input>
      <button onClick={addFnc}>➕</button>
    </>
  );
});
