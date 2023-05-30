//rafc <- snippet es7+
import React, { useState } from "react";

interface ITask {
  id: number;
  title: string;
  done: boolean;
}
const taskListInit = [
  { id: 1, title: "One", done: true },
  { id: 2, title: "iki", done: false },
  { id: 3, title: "se", done: false },
  { id: 4, title: "quad", done: true },
]; //ref1;

export const TaskList = () => {
  //   //value, reference
  //   const x = [1, 2, 3]; //ref1
  //   const y = [1, 2, 3]; //ref2
  //   const a = (a: number, b: number) => a + b;
  //   const b = (a: number, b: number) => a + b;
  //   console.log(x === y);
  //   console.log(a === b);

  //   //x = [1,2,3];
  //   x.push(4);
  //   x[0] = 0;
  //   console.log(x);

  const [taskList, setTaskList] = useState(taskListInit);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const toggle = (task: ITask) => {
    task.done = !task.done;
    //shallow copy
    // 1. setTaskList(taskList.concat());
    // 2. setTaskList(taskList.slice());
    setTaskList([...taskList]); //Operator Rest
  };

  const add = () => {
    //console.log(newTaskTitle);
    // taskList.push({ id: Math.random(), title: newTaskTitle, done: false });
    // setTaskList([...taskList]);

    setTaskList([
      ...taskList,
      { id: Math.random(), title: newTaskTitle, done: false },
    ]);
    setNewTaskTitle("");
  };

  const remove = (task: ITask) => {
    const newList = taskList.filter((x) => x.id !== task.id);
    setTaskList(newList);
  };

  return (
    <>
      <div>TaskList</div>
      {/* un-controlled */}
      {/* <input onChange={(e) => setNewTaskTitle(e.target.value)}></input> */}

      <input
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      ></input>
      <button onClick={add}>➕</button>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggle(task)}
            />
            {task.title}
            <button onClick={() => remove(task)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
};
