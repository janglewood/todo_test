import React from 'react';
import AddForm from '../../components/AddForm/AddForm';
import useUserSelectorHook from '../../hooks/useUserSelector';
import { useSaga } from '../../hooks/useSaga';
import { addFormFlowSaga } from '../../sagas/addFormSaga';
import { editProfileSaga } from '../../sagas/editProfileSaga'

const AddUserPage = ({ isEditing, history }) => {
	let userId = history.match ? history.match.params.userId : null;
	const userData = useUserSelectorHook(userId);
	useSaga(isEditing ? editProfileSaga : addFormFlowSaga);
	return (
		<AddForm
			isEditing={isEditing}
			editingUser={userData}
			userId={userId}
		/>
	)
}

export default AddUserPage;