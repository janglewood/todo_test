import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from './searchReducer';
import userReducer from './userReducer';
import sessionReducer from './sessionReducer';

export default (history) => combineReducers({
	users: userReducer,
	searchValue: searchReducer,
	currentSession: sessionReducer,
	router: connectRouter(history),
});