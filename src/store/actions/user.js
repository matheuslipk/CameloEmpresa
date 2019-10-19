import { USER_LOGGED_IN, USER_LOGGED_OUT, VERIFICA_LOGGED_IN } from './actionTypes'

export const login = ()=>{
    return {
        type: USER_LOGGED_IN
    }
}

export const logout = ()=>{
    return {
        type: USER_LOGGED_OUT
    }
}