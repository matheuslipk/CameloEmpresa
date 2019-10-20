import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import RedefinirSenha from './pages/RedefinirSenha';
import MeusProdutos from './pages/MeusProdutos';
import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Conta from './pages/Conta';
import Produto from './pages/Produto';
import Header from './components/Header';
import { cores } from './constantes';

// Pilha de telas do login
const stackLogin = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  RedefinirSenha: {
    screen: RedefinirSenha,
    navigationOptions: {
      headerTransparent: true,
      headerBackground: <Header />,
      headerTintColor: cores.tinkColorHeader,
    },
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      headerTransparent: true,
      headerBackground: <Header />,
      headerTintColor: cores.tinkColorHeader,
    },
  },
});

// Pilha de telas dos produtos
const stackMeusProdutos = createStackNavigator({
  MeusProdutos: {
    screen: MeusProdutos,
    navigationOptions: {
      headerTitle: 'Meus Produtos',
      headerTransparent: true,
      headerBackground: <Header />,
      headerTintColor: cores.tinkColorHeader,
      header: null,
    },
  },
  Produto: {
    screen: Produto,
    navigationOptions: {
      headerTintColor: cores.tinkColorHeader,
      headerTransparent: true,
      headerBackground: <Header />,
    },
  },
});

const tabNavigatorPrincipal = createBottomTabNavigator({
  Principal: {
    screen: Main,
  },
  'Meus Produtos': stackMeusProdutos,
  Conta,
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'blue',
  },
  initialRouteName: 'Meus Produtos',
});

const RoutesLogin = createAppContainer(stackLogin);

const RoutesMain = createAppContainer(tabNavigatorPrincipal);

export { RoutesLogin, RoutesMain };
