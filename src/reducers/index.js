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

export const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TASK') {
        return {...state, tasks: [...state.tasks, action.payload]};
    } else {
        return state;
    }
};