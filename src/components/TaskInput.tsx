import React, { useState } from "react";

interface TaskInputProps {
  add: (title: string) => void;
}
export const TaskInput = ({ add }: TaskInputProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const addFnc = () => {
    add(newTaskTitle);
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
};
