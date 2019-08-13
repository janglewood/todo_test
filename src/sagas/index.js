import { all } from 'redux-saga/effects';
import { addFormSaga } from './addFormSaga';

function* helloSaga() {
    console.log('Hello Sagas!')
  }

export function* rootSaga () {
    yield all([
        addFormSaga(),
        helloSaga(),
    ]);
}