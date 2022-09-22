import { useSelector } from "react-redux";
import Task from "../Task";
import styles from "./index.module.scss";

const TasksList = () => {
  const {listArray } = useSelector((state) => state);
  return (
    <div className={styles.TasksList}>
      <ul className={styles.list}>
        {
        listArray.data.length >= 0 && listArray.data.map((task, i) => ( task.trim() &&
          <Task key={i}>{task}</Task>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;
