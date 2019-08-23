import {all} from 'redux-saga/effects';
import {editProfileSaga} from './editProfileSaga';
import {addFormFlowSaga} from './addFormSaga';
import {getProfileSaga} from './getProfilesSaga';

export function* rootSaga() {
    yield all([]);
}