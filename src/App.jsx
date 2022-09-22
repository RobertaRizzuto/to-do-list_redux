 import { useSelector } from 'react-redux';
import './App.module.scss';
import MainInput from './Components/MainInput';
import TasksList from './Components/TasksList';

function App() {
const {input, listArray} = useSelector((state)=>state)

  return (
    <div className="App">
      <TasksList/>
      <MainInput/>
    </div>
  );
}

export default App;
