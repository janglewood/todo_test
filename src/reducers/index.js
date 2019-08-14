import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export const initialState = {
    tasks: [
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
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'CANCEL_FORM':
            return state;
        default:
            return state;
    }
};

export default (history) => combineReducers({
    form: formReducer,
    router: connectRouter(history),
});