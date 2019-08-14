import {takeEvery, all, put} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { mockPostRequest } from '../utils/request';

function* handleSubmitAddForm() {
    const res = yield mockPostRequest();
    console.log(res);
    yield console.log('Submit');
}

function* handleCancelFormSaga() {
    yield put(push('/'));
};  

export function* addFormSaga() {
    yield all([
        takeEvery('ADD_TASK', handleSubmitAddForm),
        takeEvery('CANCEL_FORM', handleCancelFormSaga),
    ]);
}