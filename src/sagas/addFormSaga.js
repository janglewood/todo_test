import { put, race, take } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { submitFalse } from '../actions';
import { ADD_PROFILE, CANCEL_FORM } from '../actions/constants';

function* handleSubmitAddForm(formData, token) {
  const res = yield fetch('/form', {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Authorization': `bearer ${token}` },
    body: JSON.stringify(formData),
  });
  if (res.status === 201) {
    console.log('post');
    yield put(push('/'));
  }
  // throw new Error('Add form error');
}

function* handleCancelFormSaga() {
  yield put(push('/'));
};

export function* addFormFlowSaga(token) {
  while (true) {
    const { addProfile, cancelForm } = yield race({
      addProfile: take(ADD_PROFILE),
      cancelForm: take(CANCEL_FORM),
    });
    if (addProfile) {
      const formData = addProfile.payload;
      try {
        yield handleSubmitAddForm(formData, token);
        return;
      } catch (err) {
        console.error(err);
        yield put(submitFalse(err.message));
      }
    } else if (cancelForm) {
      yield handleCancelFormSaga();
      return;
    };
  }
}
