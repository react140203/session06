import React, { useState } from "react";

export const TaskInput = ({ add }: any) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  return (
    <>
      <input
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      ></input>
      <button onClick={() => add(newTaskTitle)}>➕</button>
    </>
  );
};
