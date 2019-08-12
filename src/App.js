import React, {useState} from 'react';
import TaskContainer from './components/TaskContainer/TaskContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddButton from './components/AddField/AddButton/AddButton';
import AddForm from './components/AddForm/AddForm';
import './App.css';

function App() {
  const initialTasks = ['1', '2'];
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (e) => {
    setTasks([...tasks, e.target.input.value]);
    e.target.input.value = '';
    console.log(tasks);
  }

  return (
    <Router>
      <div className="App">
        <header className="header">
          To Do App
        </header>
        <div className="tasks-block">
          <Route path='/tasks' render={() => <TaskContainer tasks={tasks} />} />
        </div>
        <div className='form-block'>
          <Route exact path="/form" component={AddForm} />
        </div>
      </div>
    </Router>
  );
}

export default App;
