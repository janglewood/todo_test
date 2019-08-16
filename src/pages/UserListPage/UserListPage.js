import React from 'react';
import User from '../../components/User/User';
import { createBrowserHistory } from 'history';
import {bindActionCreators} from 'redux';
import { connect } from  'react-redux';
import { push } from 'connected-react-router'
import * as S from './styled';

const history = createBrowserHistory();

const UserListPage = ({users, push}) => {
	const goToUserPage = (index) => push(`user/${index + 1}`);
  return (
			<ul>
				{users.map((user, index) => {
						return 	<S.ListItem key={index} onClick={goToUserPage.bind(null, index)}>
											<User user={user} />
										</S.ListItem>	
						})}
				</ul>
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
)(UserListPage);