import {takeEvery} from 'redux-saga/effects';

function* handleSubmitAddForm() {
    yield console.log('Will send post request');
}

export function* addFormSaga() {
    yield takeEvery('ADD_TASK', handleSubmitAddForm);
}