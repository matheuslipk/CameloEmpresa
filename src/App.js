import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {RoutesLogin, RoutesMain} from './routes';
import AsyncStorage from '@react-native-community/async-storage';
import { login, logout } from '../src/store/actions/user'

const App = function (props) {
  const { login, logout, logado } = props   

  async function verificaLogado(){
    let usuario = null;
    await AsyncStorage.getItem("@usuario").then(resultado=>{
        usuario = resultado
    })
    if(usuario){
      login()
    } 
  }

  verificaLogado()

  return (
    <>
    { logado ? <RoutesMain/> : <RoutesLogin/> }    
    </>
  );

  
};

const mapStateToProps = store => ({
  logado: store.logado
});

const mapDispatchToProps = dispatch=>
  bindActionCreators({ login, logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
