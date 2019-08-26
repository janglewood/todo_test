import { createSelector } from 'reselect';

const getSearchValue = state => state.searchValue;
const getUsersList = state => state.users.usersListData.data;
const getUsersProfiles = state => state.users.usersProfileData.data;

export const getProfilesBySearchValue = createSelector(
  [getUsersList, getSearchValue],
  (users, searchValue) => {
    const result = users.filter(user =>
      user.firstname.toLowerCase().includes(searchValue));
    return result;
  }
);

export const getUserById = (id) => createSelector(
  [getUsersProfiles],
  users => {
    const result = [users].find(user => //express backend return array, loopback return object
      user.id === Number(id)
    )
    return result;
  }
);