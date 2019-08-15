import React from 'react';
import Task from './Task/Task';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from  'react-redux';
import { push } from 'connected-react-router'
import * as S from './styled';

const history = createBrowserHistory();

const TaskContainer = ({tasks, push}) => {
  return (
		<Router history={history}>
			<ul>
				{tasks.map((task, index) => {
						return <S.ListItem key={index} onClick={() => push(`user/${index + 1}`)} >
									<Task value={task} />
								</S.ListItem>	
						})}
				</ul>
		</Router>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
	push: push,
}, dispatch);

const mapStateToProps = store => {
	return {
		value: store.value,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TaskContainer);