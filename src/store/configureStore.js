import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { initialState } from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware(history)),
    composeWithDevTools(),
);

const store = createStore(
    rootReducer(history),
    initialState,
    enhancer,
);

store.runSaga = sagaMiddleware.run;

// sagaMiddleware.run(rootSaga);

export default store;