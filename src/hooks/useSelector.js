import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const useSelectorHook = () => {
    const selectedUsers = createSelector(
        state => state.form.users,
        state => state.searchValue,
        (users, searchValue) => users.filter(user => 
                    user.firstName.toLowerCase().includes(searchValue),
        )
    );
    return useSelector(selectedUsers);
}

export default useSelectorHook;