import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useUserSereachValueHook = () => {
	const searchValue = createSelector(
		state => state,
		state => state.searchValue,
	)
	return useSelector(searchValue);
};

export default useUserSereachValueHook;