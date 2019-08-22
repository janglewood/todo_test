import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useUserSelectorHook = (id) => {
	const accordingUser = createSelector(
		state => state.users.usersProfileData.data,
		users => users.find(user =>
			user.id === Number(id),
		)
	);
	return useSelector(accordingUser);
}

export default useUserSelectorHook;