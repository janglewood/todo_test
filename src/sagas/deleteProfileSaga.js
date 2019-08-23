import { takeEvery } from 'redux-saga/effects';
import { DELETE_PROFILE } from '../actions/constants';

function* deleteP({payload}) {
    const request = yield fetch('/delete', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: payload }),
    });
    if (request.status === 200) {
        console.log('delete success');
    } else {
        yield console.log(request.statusText);
        // throw new Error(request.statusText);
    }
};

export function* deleteProfileSaga() {
    yield console.log('delete profile saga');
    yield takeEvery(DELETE_PROFILE, deleteP);
};