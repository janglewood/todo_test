import React from 'react';
import Task from './Task/Task';

const TaskContainer = (props) => {
	const {tasks} = props;
  return (
    <ul>
        {tasks.map((task, index) => {
            return <li key={index}>
                    <Task value={task} />
                   </li>
        })}
    </ul>
  )
}

export default TaskContainer;