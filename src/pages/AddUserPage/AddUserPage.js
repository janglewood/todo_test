import React from 'react';
import AddForm from '../../components/AddForm/AddForm';

const AddUserPage = ({ isEditing, users, history }) => {
	let userId = history.match ? history.match.params.userId : null;
	return (
					<AddForm 
						isEditing={isEditing}
						editingUser={userId ? users[userId - 1] : null}
						userId={userId - 1}
					/>
	)
}

export default AddUserPage;