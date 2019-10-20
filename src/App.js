import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { RoutesLogin, RoutesMain } from './routes';
import { login } from './store/actions/user';

const App = (props) => {
  const { loginAction, logado } = props;

  async function verificaLogado() {
    let usuario = null;
    await AsyncStorage.getItem('@usuario').then((resultado) => {
      usuario = resultado;
    });
    if (usuario) {
      loginAction();
    }
  }

  verificaLogado();

  return (
    <>
      { logado ? <RoutesMain /> : <RoutesLogin /> }
    </>
  );
};

const mapStateToProps = (store) => ({
  logado: store.logado,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginAction: login }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
