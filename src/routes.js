import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './pages/Login'
import RedefinirSenha from './pages/RedefinirSenha'
import MeusProdutos from './pages/MeusProdutos'
import Main from './pages/Main'
import Cadastro from './pages/Cadastro'


const RoutesLogin = createAppContainer(
    createStackNavigator({
        Login, 
        RedefinirSenha,
        Cadastro
    })
) 

const RoutesMain = createAppContainer(
    createBottomTabNavigator({       
        "Principal": Main,
        "Meus Produtos": MeusProdutos
    })
)

export { RoutesLogin, RoutesMain }