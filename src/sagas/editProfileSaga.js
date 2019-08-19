import { put, race, take } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { EDIT_PROFILE, CANCEL_FORM } from '../actions/constants';
import { submitFalse } from '../actions/index';
import { mockPostRequest } from '../utils/request';

function* handleEditButton() {
  const res = yield mockPostRequest();
  console.log(res);
  yield put(push('/'));

  // throw new Error('Add form error');
}

function* handleCancelForm() {
  yield put(push('/'));
}

export function* editProfileSaga() {
  console.log('editSaga works here');
  while(true) {
    const {editProfile, cancelForm} = yield race({
      editProfile: take(EDIT_PROFILE),
      cancelForm: take(CANCEL_FORM),
    });
  
    if (editProfile) {
      try {
        yield handleEditButton();
      } catch(err) {
        yield put(submitFalse(err.message));
      }
    } else if (cancelForm) {
      yield handleCancelForm();
    }
  }
}
