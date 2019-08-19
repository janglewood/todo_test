import { createSelector } from 'reselect';

const getSearchValue = state => state.searchValue;
const getUsers = state => state.form.users;

export const getAccordingProfiles = createSelector(
  [ getUsers, getSearchValue ],
  (users, searchValue) => {
    const result =  users.filter(user => 
        user.firstName.toLowerCase().includes(searchValue));
    console.log('!!!!!', result);
    return result
  }
);
