import { put, take, select } from 'redux-saga/effects';
import { getProfiles } from '../actions/index';
import { setIsProfilesLoading } from '../actions/isLoading';
import { REHYDRATE } from 'redux-persist';
import { getCurrentSessionState } from '../selectors';

export function* getProfilesSaga() {
    yield take(REHYDRATE);
    const { token } = yield select(getCurrentSessionState());
    yield put(setIsProfilesLoading(true));
    console.log('getProfileSaga works here');
    const res = yield fetch('/users', {
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
    });
    const data = yield res.json();
    yield put(getProfiles(data));
    yield put(setIsProfilesLoading(false));
}