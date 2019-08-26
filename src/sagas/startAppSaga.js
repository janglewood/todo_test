import { put, takeEvery } from 'redux-saga/effects';
import { getProfilesSaga } from './getProfilesSaga';
import { START_DELETE_PROFILE } from '../actions/constants';
import { deleteProfileFromStore } from '../actions/index';

function* deleteUser({ payload }) {
  const request = yield fetch('/delete', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
  });
  if (request.status === 204) {
    yield put(deleteProfileFromStore(payload));
  } else {
    yield console.log(request.statusText);
    // throw new Error(request.statusText);
  }
};

export function* startAppSaga() {
  yield getProfilesSaga();
  yield takeEvery(START_DELETE_PROFILE, deleteUser);
}