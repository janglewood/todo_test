export const addTask = value => {
    return {
        type: 'ADD_TASK',
        payload: value,
    }
};

export const wentToForm = () => {
    return {
        type: 'WENT_TO_FORM',
    }
};

export const cancelForm = () => {
    return {
        type: 'CANCEL_FORM',
    }
}