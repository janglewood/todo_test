import {takeEvery, all} from 'redux-saga/effects';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* handleSubmitAddForm() {
    yield delay(1000);
    yield console.log('Submit');
}

function* handleCancelFormSaga() {
    yield console.log('Wait for user action');
};  

export function* addFormSaga() {
    yield all([
        takeEvery('ADD_TASK', handleSubmitAddForm),
        takeEvery('CANCEL_FORM', handleCancelFormSaga),
    ]);
}