import { createStore, combineReducers } from 'redux'
import userReducer from './reducers/user'

const reducers = combineReducers({
    user: userReducer,
})

const storeConfif = () =>{
    return createStore(reducers)
}

export default storeConfif