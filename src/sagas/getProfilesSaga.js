import { put } from 'redux-saga/effects';
import { getProfiles } from '../actions/index';
import { setIsProfilesLoading } from '../actions/isLoading';

export function* getProfilesSaga(token) {
    yield put(setIsProfilesLoading(true));
    console.log('getProfileSaga works here');
    const res = yield fetch('/api', {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
    });
    const data = yield res.json();
    yield put(getProfiles(data));
    yield put(setIsProfilesLoading(false));
}