import { put, select, take } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { getCurrentSessionState } from '../selectors';
import { REHYDRATE } from 'redux-persist';

export function* redirectSaga({ location: { pathname } }) {
  yield take(REHYDRATE);
  const token = yield select(getCurrentSessionState());
  const pathIsRegisterOrLogin = pathname === '/login' || pathname === '/register';
  if (!token && !pathIsRegisterOrLogin) {
    yield console.log('redirect');
    yield put(push('/login'));
  }
};