import { memo, useContext } from "react";
import { ITask } from "./ITask";
import { AppContext } from "../../appContext";
import { remove, toggle } from "./TaskList.slice";
import { useAppDispatch } from "../../redux/hooks";

interface TaskItemProps {
  task: ITask;
  readOnly?: boolean;
}
export const TaskItem = memo(({ task, readOnly }: TaskItemProps) => {
  const { color } = useContext(AppContext);
  const dispatch = useAppDispatch();
  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        readOnly={readOnly}
        onChange={() => dispatch(toggle(task.id))}
      />
      <em style={{ color }}>{task.title}</em>
      {!readOnly && (
        <button onClick={() => dispatch(remove(task.id))}>❌</button>
      )}
    </li>
  );
});
