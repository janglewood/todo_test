import { put } from 'redux-saga/effects';
import { getProfiles} from '../actions/index';
import { setIsProfilesLoading } from '../actions/isLoading';

export function* getProfilesSaga() {
    yield put(setIsProfilesLoading(true));
    console.log('getProfileSaga works here');
    const res = yield fetch('/api');
    const data = yield res.json();
    yield put(getProfiles(data));
    yield put(setIsProfilesLoading(false));
}