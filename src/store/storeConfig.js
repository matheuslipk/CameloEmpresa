import { createStore, combineReducers } from 'redux';
import user from './reducers/user';

const reducers = combineReducers({
  user,
});

export default createStore(reducers);
