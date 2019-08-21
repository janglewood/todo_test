import { put, race, take } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { EDIT_PROFILE, CANCEL_FORM } from '../actions/constants';
import { submitFalse } from '../actions/index';

function* handleEditButton(editedData) {
  const res = yield fetch(`/edit/user/${editedData.id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editedData),
  });
  if (res.status === 200) {
    yield put(push('/'));
  } 

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
        const editedData = editProfile.payload;
        yield handleEditButton(editedData);
      } catch(err) {
        yield put(submitFalse(err.message));
      }
    } else if (cancelForm) {
      yield handleCancelForm();
    }
  }
}
