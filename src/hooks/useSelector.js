import { useSelector } from 'react-redux';
import { getProfilesBySearchValue } from '../selectors/index';

const useSelectorHook = () => {
	return useSelector(getProfilesBySearchValue);
}

export default useSelectorHook;