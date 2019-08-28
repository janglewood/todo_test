import { ADD_TOKEN_TO_STORE } from '../actions/constants';

const sessionReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_TOKEN_TO_STORE:
      return action.payload;
    default:
      return state;
  };
};

export default sessionReducer;