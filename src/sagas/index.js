import { all } from 'redux-saga/effects';
import { addFormSaga } from './addFormSaga';
import { wentToFormSaga } from './wentToFormSaga';
import { cancelFormSaga } from './cancelFormSaga';

export function* rootSaga () {
    yield all([
        addFormSaga(),
        wentToFormSaga(),
        cancelFormSaga(),
    ]);
}