import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes';

export const login = () => ({
  type: USER_LOGGED_IN,
});

export const logout = () => ({
  type: USER_LOGGED_OUT,
});
