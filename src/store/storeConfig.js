import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'

const reducers = combineReducers({
    logado: userReducer,
})

export default createStore(reducers)