import React from 'react';
import Task from './Task/Task';
import { createBrowserHistory } from 'history';
import { Route, Router } from 'react-router-dom';
import { connect } from  'react-redux';
import AddForm from '../AddForm/AddForm';
import * as S from './styled';

const history = createBrowserHistory();

const TaskContainer = ({tasks}) => {
  return (
		<Router history={history}>
			<ul>
				{tasks.map((task, index) => {
					const pageAdress = `/${index + 1}/`;
						return <S.ListItem key={index}>
									<S.ButtonLink to={pageAdress}>
										<Task value={task} />
									</S.ButtonLink>
								</S.ListItem>	
						})}
				</ul>
				<Route exact path="/form" component={AddForm} />
		</Router>
  )
}

const mapStateToProps = store => {
	return {
		value: store.value,
	}
}

export default connect(mapStateToProps)(TaskContainer);