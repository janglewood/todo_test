import React, {useState} from 'react';
import TaskContainer from './components/TaskContainer/TaskContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddForm from './components/AddForm/AddForm';
import Header from './components/Header/Header';
import './App.css';
import tasksConfig from './configs/tasksConfig';

function App() {
  const [tasks, setTasks] = useState(tasksConfig);

  // const addTask = (e) => {
  //   setTasks([...tasks, e.target.input.value]);
  //   console.log(tasks);
  // }

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' render={() => <TaskContainer tasks={tasks} />} />
        <Route exact path="/form" component={AddForm} />
      </div>
    </Router>
  );
}

export default App;
