import React from 'react';
import Task from './Task/Task';
import Page from '../Pages/Page';
import { createBrowserHistory } from 'history';
import { Route, Link, Router, Switch } from 'react-router-dom';
import AddButton from '../AddField/AddButton/AddButton';
import AddForm from '../AddForm/AddForm';


const history = createBrowserHistory();

const TaskContainer = (props) => {
	const {tasks} = props;

  return (
		<Router history={history}>
			<ul>
				{tasks.map((task, index) => {
					const pageAdress = `/${index + 1}/`;
						return <li key={index}>
							<Link to={pageAdress}>
								<Task value={task} />
							</Link>
							</li>
						})}
				</ul>
				<div className="add-button">
					<Link to='/form'>
						<AddButton />
					</Link>
        		</div>
				<Route exact path="/form" component={AddForm} />
		</Router>
  )
}

export default TaskContainer;