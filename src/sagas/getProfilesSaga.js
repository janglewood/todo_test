import { put } from 'redux-saga/effects';
import { getProfiles} from '../actions/index';

export function* getProfileSaga() {
    console.log('getProfileSaga works here');
    const res = yield fetch('/api');
    const data = yield res.json();
    yield put(getProfiles(data));
}