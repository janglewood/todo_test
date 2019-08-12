import React, {useState} from 'react';
import AddField from './components/AddField/AddField';
import TaskContainer from './components/TaskContainer/TaskContainer';
import './App.css';

function App() {
  const initialTasks = [1, 2];
  const[tasks, setTasks] = useState(initialTasks);

  const addTask = (e) => {
    setTasks([...tasks, +e.target.input.value]);
    e.target.input.value = '';
    console.log(tasks);
  }

  return (
    <div className="App">
      <header className="header">
        To Do App
      </header>
      <div className="add-block">
        <AddField submitHandler={addTask}/>
      </div>
      <div className="tasks-block">
        <TaskContainer tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
