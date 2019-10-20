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

// Pilha de telas do login
const stackLogin = createStackNavigator({
  Login,
  RedefinirSenha,
  Cadastro,
}, {
  headerMode: 'none',
});

// Pilha de telas dos produtos
const stackMeusProdutos = createStackNavigator({
  MeusProdutos: {
    screen: MeusProdutos,
    navigationOptions: () => ({
      headerTitle: 'Meus Produtos',
    }),
  },
  Produto,
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
