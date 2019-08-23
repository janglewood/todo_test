import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import searchReducer from './searchReducer';
import userReducer from './userReducer';

export default (history) => combineReducers({
	users: userReducer,
	searchValue: searchReducer,
	router: connectRouter(history),
});