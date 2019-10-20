import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';

const INITIAL_VALUE = false;

function reducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return true;

    case USER_LOGGED_OUT:
      return false;

    default: return state;
  }
}

export default reducer;
