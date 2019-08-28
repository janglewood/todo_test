import React from 'react';
import AddForm from '../../components/AddForm/AddForm';
import useUserSelectorHook from '../../hooks/useUserSelector';
import { useSaga } from '../../hooks/useSaga';
import { addFormFlowSaga } from '../../sagas/addFormSaga';
import { editProfileSaga } from '../../sagas/editProfileSaga';
import useCurrentSessionHook from '../../hooks/useCurrentSession';

const AddUserPage = ({ isEditing, history }) => {
	let userId = history.match ? history.match.params.userId : null;
	const userData = useUserSelectorHook(userId);
	const { token } = useCurrentSessionHook();
	useSaga((isEditing ? editProfileSaga : addFormFlowSaga), [token]);
	return (
		<AddForm
			isEditing={isEditing}
			editingUser={userData}
			userId={userId}
		/>
	)
}

export default AddUserPage;