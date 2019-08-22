import React from 'react';
import AddForm from '../../components/AddForm/AddForm';
import useUserSelectorHook from '../../hooks/useUserSelector';

const AddUserPage = ({ isEditing, history }) => {
	let userId = history.match ? history.match.params.userId : null;
	const userData = useUserSelectorHook(userId);
	return (
		<AddForm
			isEditing={isEditing}
			editingUser={userData}
			userId={userId}
		/>
	)
}

export default AddUserPage;