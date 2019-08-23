import { CHANGE_INPUT_VALUE } from '../actions/constants';

const searchReducer = (state = '', action) => {
	switch (action.type) {
		case CHANGE_INPUT_VALUE:
			return action.payload;
		default:
			return state;
	};
};

export default searchReducer;