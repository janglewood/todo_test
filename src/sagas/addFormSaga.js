import {takeEvery, all, put, race, take} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import { mockPostRequest } from '../utils/request';

function* handleSubmitAddForm() {
    const res = yield mockPostRequest();
    console.log(res);
    yield put(push('/'));
}

function* handleCancelFormSaga() {
    yield put(push('/'));
};

export function* addFormFlowSaga() {
    console.log('!!!!!!!!!!!!addFormFlowSaga');

    const {addTask, cancelForm} = yield race({
        addTask: take('ADD_TASK'),
        cancelForm: take('CANCEL_FORM'),
    });

    if (addTask) {
        yield handleSubmitAddForm();
    } else if (cancelForm) {
        yield handleCancelFormSaga();
    }
}

// export function* addFormSaga() {
//     yield all([
//         takeEvery('ADD_TASK', handleSubmitAddForm),
//         takeEvery('CANCEL_FORM', handleCancelFormSaga),
//     ]);
// }