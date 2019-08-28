import { useSelector } from 'react-redux';
import { getCurrentSessionState } from '../selectors/index';

const useCurrentSessionHook = () => useSelector(getCurrentSessionState());

export default useCurrentSessionHook;