import { put } from 'redux-saga/effects';
import { getUserData } from '../actions/index';

export function* getUserSaga(id) {
    console.log('getUserSaga works here');
    const res = yield fetch(`/user/${id}`);
    if (res.status === 200) {
        const data = yield res.json();
        yield put(getUserData(data));
        return;
    }
}