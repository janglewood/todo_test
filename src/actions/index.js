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

export const goToLink = id => {
    return {
        type: 'GO_TO_LINK',
        payload: id,
    }
};