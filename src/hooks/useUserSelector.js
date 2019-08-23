import { useSelector } from 'react-redux';
import { getUserById } from '../selectors/index';

const useUserSelectorHook = (id) => {
	return useSelector(getUserById(id));
}
export default useUserSelectorHook;