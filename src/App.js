import React, {useState} from 'react';
import TaskContainer from './components/TaskContainer/TaskContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from  'react-redux';
import AddForm from './components/AddForm/AddForm';
import Header from './components/Header/Header';
import './App.css';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

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

const mapStateToProps = store => {
  console.log(store);
  return {
    tasks: store.tasks,
  }
};

export default connect(mapStateToProps)(App);
