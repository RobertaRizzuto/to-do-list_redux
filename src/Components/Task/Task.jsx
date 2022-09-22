import styles from "./index.module.scss";
const Task = ({children}) => {
  return (
    <li className={styles.Task}>
      <input type="checkbox" className={styles.checkbox} />
      <span className={styles.text}>{children}</span>
    </li>
  );
};

export default Task;
