
import styles from './App.module.scss';
import MainInput from './Components/MainInput';
import TasksList from './Components/TasksList';

function App() {


  return (
    <div className={styles.App}>
      <TasksList/>
      <MainInput/>
    </div>
  );
}

export default App;
