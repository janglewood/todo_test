import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useSelectorHook = () => {
    const selectedUsers = createSelector(
        state => state,
        state => state.form.users.filter(user => 
                    user.firstName.toLowerCase().includes(state.searchValue),
        )
    );
    return useSelector(selectedUsers);
}

export default useSelectorHook;