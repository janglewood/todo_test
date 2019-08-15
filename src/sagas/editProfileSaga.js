import {takeEvery, all, put, race, take} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { mockPostRequest } from '../utils/request';
import { submitFalse, addTaskToStore } from '../actions';
import { EDIT_PROFILE } from '../actions/constants';
import {editProfile} from '../actions/index';


function* handleEditButton() {
    yield put(push('/edit/'));
}
export function* editProfileSaga() {
    console.log('editSaga works here');
    const {editProfile} = yield race({
        editProfile: take(EDIT_PROFILE),
    });
    if(editProfile) {
        yield handleEditButton();
    }

}