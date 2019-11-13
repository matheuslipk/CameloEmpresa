import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

export const login = (user) => ({
  type: USER_LOGGED_IN,
  payload: {
    id: user.id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
  },
});

export const logout = () => ({
  type: USER_LOGGED_OUT,
});
