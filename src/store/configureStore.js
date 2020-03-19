import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
// import {rootSaga} from '../sagas';
import { userInitialState } from '../reducers/userReducer';
import createReduxPromiseListener from 'redux-promise-listener';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['currentSession']
};

const sagaMiddleware = createSagaMiddleware();

const reduxPromiseListener = createReduxPromiseListener();

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));
const enhancer = compose(
    applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        reduxPromiseListener.middleware,
    ),
    composeWithDevTools(),
);

const initialState = {
    users: userInitialState,
    searchValue: '',
};

const store = createStore(
    persistedReducer,
    // rootReducer(history),
    initialState,
    enhancer,
);

store.runSaga = sagaMiddleware.run;

export const promiseListener = reduxPromiseListener;
// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;