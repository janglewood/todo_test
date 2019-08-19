import React from 'react';
import User from '../../components/User/User';
import { connect } from  'react-redux';
import * as S from './styled';

const UserListPage = ({ users }) => {
  return (
		<ul>
			{users.map((user, index) => {
				return 	<S.ListItem key={index}>
							<User user={user} index={index}/>
						</S.ListItem>	
				})}
		</ul>
  )
};

const mapStateToProps = state => {
	return {
		value: state.value,
	}
};

export default connect(
	mapStateToProps,
	null,
)(UserListPage);