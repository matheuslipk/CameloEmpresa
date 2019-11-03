import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from './pages/Login';
import RedefinirSenha from './pages/RedefinirSenha';
import MeusProdutos from './pages/MeusProdutos';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Conta from './pages/Conta';
import Produto from './pages/Produto';

import MyDrawer from './components/MyDrawer';

// Pilha de telas do login
const stackLogin = createStackNavigator({
  Login: {
    screen: Login,
  },
  RedefinirSenha: {
    screen: RedefinirSenha,
  },
  Cadastro: {
    screen: Cadastro,
  },
}, {
  headerMode: 'none',
});

// Pilha de telas dos produtos
const stackMeusProdutos = createStackNavigator({
  MeusProdutos,
  Produto,
}, {
  headerMode: 'none',
});

const drawerPrincipal = createDrawerNavigator({
  Main,
  Conta,
  'Meus Produtos': stackMeusProdutos,
}, {
  contentComponent: ({ navigation }) => (<MyDrawer navigation={navigation} />),
});

const RoutesLogin = createAppContainer(stackLogin);

const RoutesMain = createAppContainer(drawerPrincipal);

export { RoutesLogin, RoutesMain };
