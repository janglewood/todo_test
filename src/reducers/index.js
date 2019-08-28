import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import sessionReducer from './sessionReducer';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'currentSession',
// 	storage,
// 	whitelist: ['currentSession']
// };

export default (history) => combineReducers({
	users: userReducer,
	searchValue: searchReducer,
	// currentSession: persistReducer(persistConfig, sessionReducer),
	currentSession: sessionReducer,
	router: connectRouter(history),
});