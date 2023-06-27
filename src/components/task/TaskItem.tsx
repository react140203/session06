import { memo, useContext } from "react";
import { ITask } from "./ITask";
import { AppContext } from "../../appContext";
import { remove, toggle } from "./TaskList.slice";
import { useAppDispatch } from "../../redux/hooks";

interface TaskItemProps {
  task: ITask;
}
export const TaskItem = memo(({ task }: TaskItemProps) => {
  const { color } = useContext(AppContext);
  const dispatch = useAppDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => dispatch(toggle(task.id))}
      />
      <em style={{ color }}>{task.title}</em>
      <button onClick={() => dispatch(remove(task.id))}>❌</button>
    </li>
  );
});
