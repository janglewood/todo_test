export const addTask = value => {
    return {
        type: 'ADD_TASK',
        payload: value,
    }
};

export const cancelForm = () => {
    return {
        type: 'CANCEL_FORM',
    }
};