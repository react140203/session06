import React from "react";
import { ITask } from "./TaskList";

interface TaskItemProps {
  task: ITask;
  remove: (task: ITask) => void;
  toggle: (task: ITask) => void;
}
export const TaskItem = ({ task, remove, toggle }: TaskItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggle(task)}
      />
      {task.title}
      <button onClick={() => remove(task)}>❌</button>
    </li>
  );
};
