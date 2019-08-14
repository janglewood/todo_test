import React, {useState} from 'react';
import TaskContainer from './components/TaskContainer/TaskContainer';
import { connect } from  'react-redux';
import './App.css';

function App(state) {
  const { tasks } = state;
  return (
    <div className="App">
      <TaskContainer tasks={tasks} />
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.form.tasks,
    router: state.router,
  }
};

export default connect(mapStateToProps)(App);
