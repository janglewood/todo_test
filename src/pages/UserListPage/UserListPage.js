import React from 'react';
import User from '../../components/User/User';
import { connect } from  'react-redux';
import { deleteProfile } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as S from './styled';

const UserListPage = ({ users, deleteProfile }) => {
  return (
		<ul>
			{users.map((user, index) => {
				return 	<S.ListItem key={index}>
									<User user={user} index={index}/>
									<button onClick={() => deleteProfile(index)}>Delete</button>
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

const mapDispatchToProps = dispatch => bindActionCreators({
	deleteProfile: id => deleteProfile(id),
}, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserListPage);