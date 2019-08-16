import {
    ADD_PROFILE,
    ADD_PROFILE_TO_STORE,
    CANCEL_FORM,
    GO_TO_LINK,
    SUBMIT_FALSE,
    EDIT_PROFILE,
} from './constants';

export const addProfile = (payload) => {
    return {
        type: ADD_PROFILE,
        payload,
    }
};

export const editProfile = (payload, data) => {
    return {
        type: EDIT_PROFILE,
        payload: {payload, data}
    }
}

export const addProfileToStore = (value) => {
    return {
        type: ADD_PROFILE_TO_STORE,
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