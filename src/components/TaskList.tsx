//rafc <- snippet es7+
import React, { useState } from "react";
import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";

export interface ITask {
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
  const toggle = (task: ITask) => {
    task.done = !task.done;
    //shallow copy
    // 1. setTaskList(taskList.concat());
    // 2. setTaskList(taskList.slice());
    setTaskList([...taskList]); //Operator Rest
  };

  const add = (title: string) => {
    //console.log(newTaskTitle);
    // taskList.push({ id: Math.random(), title: newTaskTitle, done: false });
    // setTaskList([...taskList]);

    setTaskList([...taskList, { id: Math.random(), title, done: false }]);
  };

  const remove = (task: ITask) => {
    if (confirm("are you sure"))
      setTaskList(taskList.filter((x) => x.id !== task.id));
  };

  //tamrin 1: rename kardan title yek task

  return (
    <>
      <div>TaskList</div>
      {/* un-controlled */}
      {/* <input onChange={(e) => setNewTaskTitle(e.target.value)}></input> */}

      <TaskInput add={add}></TaskInput>

      <ul>
        {taskList.map((task) => (
          <TaskItem key={task.id} task={task} remove={remove} toggle={toggle} />
        ))}
      </ul>
    </>
  );
};
