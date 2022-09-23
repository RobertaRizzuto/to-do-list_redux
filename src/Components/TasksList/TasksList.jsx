import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "../Task";
import styles from "./index.module.scss";

const TasksList = () => {
  const { listArray} = useSelector((state) => state);
  const dispatch = useDispatch();

  const onHandleClick = useCallback((e) => {
      listArray.data.splice(e.target.id, 1);
      dispatch({
        type: "SET_ARRAY_DATA",
        payload: [...listArray.data],
      });
    },
    [listArray, dispatch]
  );
  return (
    <div className={styles.TasksList}>
      <ul className={styles.list}>
        {listArray.data.length >= 0 &&
          listArray.data.map(
            (task, i) =>
              task.trim() && 
              (
                <Task key={i} id={i} onHandleClick={onHandleClick}>
                  {task}
                  
                </Task>
              )
          )}
      </ul>
    </div>
  );
};

export default TasksList;
