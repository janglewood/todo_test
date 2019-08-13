import {takeEvery} from 'redux-saga/effects';

function* handleCancelFormSaga() {
    yield console.log('Wait for user action');
};

export function* cancelFormSaga() {
    yield takeEvery('CANCEL_FORM', handleCancelFormSaga);
};