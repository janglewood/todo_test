import { put } from 'redux-saga/effects';
import { getUserData } from '../actions/index';
import { setIsUserLoading } from '../actions/isLoading';

export function* getUserSaga(id) {
    yield put(setIsUserLoading(true));
    console.log('getUserSaga works here');
    const res = yield fetch(`/user/${id}`);
    if (res.status === 200) {
        const data = yield res.json();
        yield put(getUserData(data));
    }
    yield put(setIsUserLoading(false));
}