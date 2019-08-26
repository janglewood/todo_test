import {
    DELETE_PROFILE_FROM_STORE,
    SET_PROFILES,
    SET_USER_DATA,
    SET_IS_USER_LOADING,
    SET_IS_PROFILES_LOADING,
} from '../actions/constants';

export const userInitialState = {
    usersListData: {
        data: [],
        isLoading: null,
    },
    usersProfileData: {
        data: [],
        isLoading: null,
    },
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case DELETE_PROFILE_FROM_STORE:
            let userIndex;
            [...state.usersListData.data].forEach((user, index) => {
                if (user.id === action.payload) {
                    userIndex = index;
                };
            });
            const users = [...state.usersListData.data];
            users.splice(userIndex, 1);
            return {
                ...state,
                usersListData: { ...state.usersListData, data: users }
            };
        case SET_PROFILES:
            return { ...state, usersListData: { ...state.usersListData, data: action.payload } };
        case SET_USER_DATA:
            return { ...state, usersProfileData: { ...state.usersProfileData, data: action.payload } }; // refactor
        case SET_IS_USER_LOADING:
            return { ...state, usersProfileData: { ...state.usersProfileData, isLoading: action.isLoading, } };
        case SET_IS_PROFILES_LOADING:
            return { ...state, usersListData: { ...state.usersListData, isLoading: action.isLoading, } };
        default:
            return state;
    }
};

export default userReducer;