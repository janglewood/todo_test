import {all} from 'redux-saga/effects';
import {editProfileSaga} from './editProfileSaga';
import {addFormFlowSaga} from './addFormSaga';

export function* rootSaga() {
    yield all([
        editProfileSaga(),
        addFormFlowSaga(),
    ]);
}