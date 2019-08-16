import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { ADD_TASK, CANCEL_FORM, ADD_TASK_TO_STORE } from '../actions/constants';

export const initialState = {
    users: [
        {
            firstName: 'Anton',
            lastName: 'Karatkevich',
            email: 'karatkevich.antony@gmail.com',
            description: 'none',
        },
        {
            firstName: 'Vasya',
            lastName: 'Pupkin',
            email: 'vasya@mail.com',
            description: 'none',
        }
    ],
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK_TO_STORE:
            return {...state, users: [...state.users, action.payload]};
        case CANCEL_FORM:
            return state;
        default:
            return state;
    }
};

export default (history) => combineReducers({
    form: formReducer,
    router: connectRouter(history),
});