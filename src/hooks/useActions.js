import { useDispatch } from 'react-redux';

export const useActions = (actions = {}) => {
    const dispatch = useDispatch();
    return Object.entries(actions).reduce((res, [key, action]) => ({
        ...res,
        [key]: (...args) => dispatch(action(...args)),
    }), {});
};
