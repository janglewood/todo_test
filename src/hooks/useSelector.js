import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useSelectorHook = () => {
	const selectedUsers = createSelector(
		state => state.users.usersListData.data,
		state => state.searchValue,
		(users, searchValue) => users.filter(user =>
			user.firstname.toLowerCase().includes(searchValue),
		)
	);
	return useSelector(selectedUsers);
}

export default useSelectorHook;