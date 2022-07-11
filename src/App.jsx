// import logo from './logo.svg';
// import './App.css';
import './components/Task.css';
import TaskForm from './components/TaskForm';
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = task => setTaskList([...taskList, task]);
  const removeTask = task_idx => setTaskList(taskList.filter((t, i) => i !== task_idx));

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      { taskList.map((task, i) => 
        <Task key={ i } task={ task } removeTask={ () => removeTask(i) } />)
      }
    </div>
  );
}

export default App;
