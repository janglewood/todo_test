import { put, race, take } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { registerUser } from '../actions';
import { REGISTER_USER } from '../actions/constants';

function* handleRegisterForm(userData) {
  const res = yield fetch('/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (res.status === 200) {
    console.log('post');
    yield put(push('/'));
  }
  // throw new Error('Add form error');
}

function* handleCancelFormSaga() {
  yield put(push('/'));
};

export function* authSaga() {
  while (true) {
    const { registerUser, cancelForm } = yield race({
      registerUser: take(REGISTER_USER),
      // cancelForm: take(CANCEL_FORM),
    });
    if (registerUser) {
      const userData = registerUser.payload;
      try {
        yield handleRegisterForm(userData);
      } catch (err) {
        console.error(err);
      }
    }
  }
}