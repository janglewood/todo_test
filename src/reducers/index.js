import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { 
    CANCEL_FORM,
    ADD_PROFILE_TO_STORE,
    EDIT_PROFILE,
    DELETE_PROFILE,
    CHANGE_INPUT_VALUE,
    GET_PROFILES
} from '../actions/constants';

export const initialState = {
    form : {
        users: [
            // {
            //     firstname: 'Anton',
            //     lastname: 'Karatkevich',
            //     email: 'karatkevich.antony@gmail.com',
            //     description: undefined,
            // },
            // {
            //     firstname: 'Vasya',
            //     lastname: 'Pupkin',
            //     email: 'vasya@mail.com',
            //     description: undefined,
            // },
            // {
            //     firstname: 'Username',
            //     lastname: 'Petrov',
            //     email: 'pa@mail.com',
            //     description: undefined,
            // },
            // {
            //     firstname: 'Petya',
            //     lastname: 'Ivanov',
            //     email: 'ip@mail.com',
            //     description: undefined,
            // },
            // {
            //     firstname: 'Ivan',
            //     lastname: 'Username',
            //     email: 'iu@mail.com',
            //     description: undefined,
            // },
            // {
            //     firstname: 'Username1',
            //     lastname: 'Username1',
            //     email: 'i1@mail.com',
            //     description: undefined,
            // },
        ],
    },
    searchValue: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE: 
            return action.payload;
        default: 
            return state;
    }
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_TO_STORE:
            return {...state, users: [...state.users, action.payload]};
        case EDIT_PROFILE:
            const editedUsers = [...state.users];
            editedUsers.splice(action.userId, 1, action.payload);           
            return {...state, users: editedUsers};
        case DELETE_PROFILE:
            let userIndex;
            [...state.users].forEach((user, index) => {
                if (user.id === action.payload) {
                    userIndex = index;
                };
            });
            const users = [...state.users];
            users.splice(userIndex, 1);           
            return {...state, users: users}; 
        case GET_PROFILES:
            return {...state, users: [...action.payload]}
        default:
            return state;
    }
};

export default (history) => combineReducers({
    form: formReducer,
    searchValue: searchReducer,
    router: connectRouter(history),
});