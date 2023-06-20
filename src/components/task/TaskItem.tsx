import { memo, useContext } from "react";
import { ITask } from "./TaskList";
import { AppContext } from "../../appContext";

interface TaskItemProps {
  task: ITask;
  remove: (task: ITask) => void;
  toggle: (task: ITask) => void;
}
export const TaskItem = memo(({ task, remove, toggle }: TaskItemProps) => {
  const { color } = useContext(AppContext);
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggle(task)}
      />
      <em style={{ color }}>{task.title}</em>
      <button onClick={() => remove(task)}>❌</button>
    </li>
  );
});
