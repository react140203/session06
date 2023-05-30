//rafc <- snippet es7+
import React from "react";

const taskList = [
  { id: 1, title: "One", done: true },
  { id: 2, title: "iki", done: false },
  { id: 3, title: "se", done: false },
  { id: 4, title: "quad", done: true },
];

export const TaskList = () => {
  return (
    <>
      <div>TaskList</div>
      <ul>
        {taskList.map((x) => (
          <li key={x.id}>
            <input type="checkbox" checked={x.done} />
            {x.title}
          </li>
        ))}
      </ul>
    </>
  );
};
