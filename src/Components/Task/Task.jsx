import styles from "./index.module.scss";
const Task = ({ children,onHandleClick,id }) => {
  return (
    <li className={styles.Task}>
      <div className={styles.text}><input type="checkbox" className={styles.checkbox} />
      <span >{children}</span></div>
      <button className={styles.button} id={id} onClick={() => onHandleClick(id)}>
        X
      </button>
    </li>
  );
};

export default Task;
