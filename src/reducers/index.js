import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {
	ADD_PROFILE_TO_STORE,
	EDIT_PROFILE,
	DELETE_PROFILE,
	CHANGE_INPUT_VALUE,
	GET_PROFILES,
	GET_USER_DATA,
	SET_IS_USER_LOADING,
	SET_IS_PROFILES_LOADING,
} from '../actions/constants';

export const initialState = {
	users: {
		usersListData: {
			data: [],
			isLoading: null,
		},
		usersProfileData: {
			data: [],
			isLoading: null,
		},
	},
	searchValue: '',
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT_VALUE:
			return action.payload;
		default:
			return state;
	};
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PROFILE_TO_STORE:
			return { ...state,
					usersProfileData: { ...state.usersProfileData, data: [...state.usersProfileData.data, action.payload] } };
		case EDIT_PROFILE:
			const editedUsers = [...state.users];
			editedUsers.splice(action.userId, 1, action.payload);
			return { users: editedUsers };
		case DELETE_PROFILE:
			let userIndex;
			[...state.users].forEach((user, index) => {
				if (user.id === action.payload) {
					userIndex = index;
				};
			});
			const users = [...state.users];
			users.splice(userIndex, 1);
			return { ...state, users: users };
		case GET_PROFILES:
			return { ...state, usersListData: { ...state.usersListData, data: action.payload } };
		case GET_USER_DATA:
			return { ...state, usersProfileData: { ...state.usersProfileData, data: action.payload } }; // refactor
		case SET_IS_USER_LOADING:
			return {...state, usersProfileData: { ...state.usersProfileData, isLoading: action.isLoading, } };
		case SET_IS_PROFILES_LOADING:
			return {...state, usersListData: { ...state.usersListData, isLoading: action.isLoading, } };			
		default:
			return state;
	}
};

export default (history) => combineReducers({
	users: formReducer,
	searchValue: searchReducer,
	router: connectRouter(history),
});