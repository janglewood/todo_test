import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { initialState } from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
// import {rootSaga} from '../sagas';
import createReduxPromiseListener from 'redux-promise-listener';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

const reduxPromiseListener = createReduxPromiseListener();

export const history = createBrowserHistory();

const enhancer = compose(
    applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        reduxPromiseListener.middleware,
        ),
    composeWithDevTools(),
);

const store = createStore(
    rootReducer(history),
    initialState,
    enhancer,
);

store.runSaga = sagaMiddleware.run;

export const promiseListener = reduxPromiseListener;
// sagaMiddleware.run(rootSaga);

export default store;