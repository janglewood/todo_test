import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { 
    CANCEL_FORM,
    ADD_PROFILE_TO_STORE,
    EDIT_PROFILE,
    DELETE_PROFILE,
} from '../actions/constants';

export const initialState = {
    form : {
        users: [
            {
                firstName: 'Anton',
                lastName: 'Karatkevich',
                email: 'karatkevich.antony@gmail.com',
                description: undefined,
            },
            {
                firstName: 'Vasya',
                lastName: 'Pupkin',
                email: 'vasya@mail.com',
                description: undefined,
            }
        ],
    }
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PROFILE_TO_STORE:
            return {...state, users: [...state.users, action.payload]};
        case CANCEL_FORM:
            return state;
        case EDIT_PROFILE:
            const editedUsers = [...state.users];
            editedUsers.splice(action.userId, 1, action.payload);           
            return {...state, users: editedUsers};
        case DELETE_PROFILE:
            const users = [...state.users];
            users.splice(action.payload, 1);           
            return {...state, users: users}; 
        default:
            return state;
    }
};

export default (history) => combineReducers({
    form: formReducer,
    router: connectRouter(history),
});