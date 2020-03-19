import { takeEvery, select } from 'redux-saga/effects';
import { DELETE_PROFILE } from '../actions/constants';
import useCurrentSessionHook from '../hooks/useCurrentSession';

function* deleteP({ payload }) {
    const { token } = select(useCurrentSessionHook);
    const request = yield fetch('/users', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
        body: JSON.stringify({ id: payload }),
    });
    if (request.status === 200) {
        console.log('delete success');
    } else {
        yield console.log(request.statusText);
        // throw new Error(request.statusText);
    }
};

export function* deleteProfileSaga(token) {
    yield console.log('delete profile saga');
    yield takeEvery(DELETE_PROFILE, (payload) => deleteP(payload, token));
};