import { ADD_TOKEN_TO_STORE, LOGOUT_USER } from '../actions/constants';

const sessionReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_TOKEN_TO_STORE:
      return action.payload;
    case LOGOUT_USER:
      return '';
    default:
      return state;
  };
};

export default sessionReducer;