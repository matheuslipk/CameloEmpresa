import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/actionTypes';

const INITIAL_VALUE = {
  id: null,
  name: 'Store',
  email: 'email@store.com',
  logged: false,
};

function reducer(state = INITIAL_VALUE, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...INITIAL_VALUE,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        logged: true,
      };

    case USER_LOGGED_OUT:
      return {
        ...INITIAL_VALUE,
      };

    default: return state;
  }
}

export default reducer;
