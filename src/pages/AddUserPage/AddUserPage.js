import React from 'react';
import AddForm from '../../components/AddForm/AddForm';

const AddUserPage = ({ isEditing, users, history }) => {
	let userId = history.match ? history.match.params.userId : null;

	const userData = users.find(user => {
		return user.id === Number(userId);
	  });
	return (
					<AddForm 
						isEditing={isEditing}
						editingUser={userData}
						userId={userId}
					/>
	)
}

export default AddUserPage;