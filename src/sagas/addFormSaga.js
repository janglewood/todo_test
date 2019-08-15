import {takeEvery, all, put, race, take} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { mockPostRequest } from '../utils/request';
import { submitFalse, addTaskToStore } from '../actions';
import { ADD_TASK, CANCEL_FORM } from '../actions/constants';

function* handleSubmitAddForm() {
    // const res = yield mockPostRequest();
    // console.log(res);
    // // yield put(push('/'));

    throw new Error('Add form error');
}

function* handleCancelFormSaga() {
        yield put(push('/'));
};

export function* addFormFlowSaga() {
    console.log('!!!!!!!!!!!!addFormFlowSaga');
    while(true) {
        const {addTask, cancelForm} = yield race({
            addTask: take(ADD_TASK),
            cancelForm: take(CANCEL_FORM),
        });
        if (addTask) {
            try {
                yield handleSubmitAddForm();
                yield put(addTaskToStore()); 
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
