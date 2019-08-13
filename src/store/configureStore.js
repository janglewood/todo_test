import { createStore, applyMiddleware, compose } from 'redux';
import { initialState, rootReducer } from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    composeWithDevTools(),
    applyMiddleware(sagaMiddleware),
);

const store = createStore(
    rootReducer, 
    initialState,
    enhancer,
);

sagaMiddleware.run(rootSaga);

export default store;