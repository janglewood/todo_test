import { put, race, take } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { addTokenToStore } from '../actions';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from '../actions/constants';
import { persistor } from '../store/configureStore';

function* handleRegisterForm(userData) {
  const request = yield fetch('/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (request.status === 200) {
    const data = yield request.json();
    yield put(addTokenToStore(data));
    yield put(push('/'));
  }
  // throw new Error('Add form error');
};

function* handleLoginForm(userData) {
  const request = yield fetch('/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (request.status === 200) {
    const data = yield request.json();
    yield put(addTokenToStore(data));
    yield put(push('/'));
  }
  // throw new Error('Add form error');
};

function* handleLogout() {
  yield persistor.purge();
  yield put(push('/login'));
};

export function* authSaga() {
  while (true) {
    const { registerUser, loginUser, logoutUser } = yield race({
      registerUser: take(REGISTER_USER),
      loginUser: take(LOGIN_USER),
      logoutUser: take(LOGOUT_USER)
    });
    if (registerUser) {
      const userData = registerUser.payload;
      try {
        yield handleRegisterForm(userData);
      } catch (err) {
        console.error(err);
      }
    } else if (loginUser) {
      const userData = loginUser.payload;
      try {
        yield handleLoginForm(userData);
      } catch (err) {
        console.error(err);
      }
    } else if (logoutUser) {
      yield handleLogout();
    }
  }
}