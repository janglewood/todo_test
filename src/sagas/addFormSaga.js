import {put, race, take} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { mockPostRequest } from '../utils/request';
import { submitFalse, addProfileToStore } from '../actions';
import { ADD_PROFILE, CANCEL_FORM } from '../actions/constants';

function* handleSubmitAddForm(formData) {
  console.log(formData);
  const res = yield fetch('/form', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (res.status === 201) {
    console.log('post');
    yield put(addProfileToStore(formData)); 
    yield put(push('/'));
  } 

  // throw new Error('Add form error');
}

function* handleCancelFormSaga() {
  yield put(push('/'));
};

export function* addFormFlowSaga() {
  console.log('!!!!!!!!!!!!addFormFlowSaga');
  while(true) {
    const {addProfile, cancelForm} = yield race({
      addProfile: take(ADD_PROFILE),
      cancelForm: take(CANCEL_FORM),
    });
    if (addProfile) {
      const formData = addProfile.payload;
      try {
        yield handleSubmitAddForm(formData);
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
