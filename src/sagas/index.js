import { all } from 'redux-saga/effects';
import { addFormSaga } from './addFormSaga';

export function* rootSaga () {
    yield addFormSaga()
}