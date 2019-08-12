import React from 'react';
import Task from './Task/Task';
import Page from '../Pages/Page';
import { createBrowserHistory } from 'history';
import { Route, Link, Router, Switch } from 'react-router-dom';

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
			<Switch>
				<Route path="/1/" component={Page} />
			</Switch>
		</Router>
  )
}

export default TaskContainer;