import {
    ADD_TASK,
    ADD_TASK_TO_STORE,
    CANCEL_FORM,
    GO_TO_LINK,
    SUBMIT_FALSE,
    EDIT_PROFILE,
} from './constants';

export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload,
    }
};

export const editProfile = (payload) => {
    return {
        type: EDIT_PROFILE,
        payload,
    }
}

export const addTaskToStore = (value) => {
    return {
        type: ADD_TASK_TO_STORE,
        payload: value,
    }
}

export const cancelForm = () => {
    return {
        type: CANCEL_FORM,
    }
};

export const goToLink = id => {
    return {
        type: GO_TO_LINK,
        payload: id,
    }
};

export const submitFalse = (payload) => {
    return {
        type: SUBMIT_FALSE,
        payload
    }
}