import {takeEvery} from 'redux-saga/effects';

function* handleWentToFormSaga() {
    yield console.log('Wait for user action');
};

export function* wentToFormSaga() {
    yield takeEvery('ADD_TASK', handleWentToFormSaga);
};