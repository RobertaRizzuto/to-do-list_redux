import { memo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";

const MainInput = () => {
  const { input, listArray } = useSelector((state) => state);
  const dispatch = useDispatch();
  const onHandleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      dispatch({
        type: "SET_ARRAY_DATA",
        payload: [...listArray.data, input.value],
      });
      dispatch({ type: "SET_INPUT_VALUE_TO_EMPTY" });
    },
    [input, listArray, dispatch]
  );
  return (
    <form className={styles.MainInput} onSubmit={onHandleSubmit}>
      <input
        type="text"
        className={styles.input}
        onChange={(e) =>
          dispatch({ type: "SET_INPUT_VALUE", payload: e.target.value })
        }
        value={input.value}
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className={styles.button}
        disabled={input.value.length === 0 && true}
      >
        Add Task
      </button>
    </form>
  );
};

export default memo(MainInput) ;
