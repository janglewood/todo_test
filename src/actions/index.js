import {
    ADD_PROFILE,
    ADD_PROFILE_TO_STORE,
    CANCEL_FORM,
    SUBMIT_FALSE,
    EDIT_PROFILE,
    DELETE_PROFILE,
    CHANGE_INPUT_VALUE,
    SET_PROFILES,
    SET_USER_DATA,
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

export const changeInputValue = (payload) => {
    return {
        type: CHANGE_INPUT_VALUE,
        payload,
    }
};

export const getProfiles = (payload) => {
    return {
        type: SET_PROFILES,
        payload, 
    }
};

export const getUserData = (payload) => {
    return {
        type: SET_USER_DATA,
        payload,
    }
};