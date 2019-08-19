import {
    ADD_PROFILE,
    ADD_PROFILE_TO_STORE,
    CANCEL_FORM,
    SUBMIT_FALSE,
    EDIT_PROFILE,
    DELETE_PROFILE,
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
};

export const deleteProfile = (payload) => {
    return {
        type: DELETE_PROFILE,
        payload
    }
};

export const addProfileToStore = (value) => {
    return {
        type: ADD_PROFILE_TO_STORE,
        payload: value,
    }
};

export const cancelForm = () => {
    return {
        type: CANCEL_FORM,
    }
};

export const submitFalse = (payload) => {
    return {
        type: SUBMIT_FALSE,
        payload
    }
};