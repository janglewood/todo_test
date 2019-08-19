import {put, race, take} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { mockPostRequest } from '../utils/request';
import { submitFalse, addProfileToStore } from '../actions';
import { ADD_PROFILE, CANCEL_FORM } from '../actions/constants';
import { FORM_ERROR } from 'final-form';

function* handleSubmitAddForm(formData) {
  const res = yield mockPostRequest();
  console.log(res);
  yield put(addProfileToStore(formData)); 
  yield put(push('/'));

  // throw new Error('Add form error');
}

function* handleCancelFormSaga() {
  yield put(push('/'));
};

export function* addFormFlowSaga() {
  while(true) {
    const {addProfile, cancelForm} = yield race({
      addProfile: take(ADD_PROFILE),
      cancelForm: take(CANCEL_FORM),
    });
    if (addProfile) {
      const {payload, resolve} = addProfile;
      
      const formData = addProfile.payload;
      try {
        yield handleSubmitAddForm(payload);
        resolve();
        return;      
      } catch (err) {
        console.error(err);
        yield put(submitFalse(err.message));
        resolve({[FORM_ERROR]: err.message})
      }
    } else if (cancelForm) {
      yield handleCancelFormSaga();
      return;
    };   
  } 
}
