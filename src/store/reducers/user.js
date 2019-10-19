import { USER_LOGGED_IN, USER_LOGGED_OUT, VERIFICA_LOGGED_IN } from '../actions/actionTypes'
import AsyncStorage from '@react-native-community/async-storage'

async function verificaLogado(){
    let usuario = null;
    await AsyncStorage.getItem("usuario").then(resultado=>{
        usuario = resultado
    })
    if(usuario){
        return true    
    }    
    return false;
}

const INITIAL_VALUE = false

function reducer(state = INITIAL_VALUE, action) {

    switch(action.type){
        case USER_LOGGED_IN : 
            return true
        
        case USER_LOGGED_OUT :
            return false
        
        default: return state
    }
}

export default reducer