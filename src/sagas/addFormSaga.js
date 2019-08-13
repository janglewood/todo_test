import {takeEvery} from 'redux-saga/effects';

function* handleSubmitAdddForm() {
    yield console.log('Will send post request');
}

export function* addFormSaga() {
    yield takeEvery('ADD_TASK', handleSubmitAdddForm)
}