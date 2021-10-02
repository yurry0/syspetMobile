import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './Home';
import Login from './Login';
import Cadastrar_Usuario from "./usuario/Cadastrar_Usuario"

const MainNav = createStackNavigator (
    {
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Home: {

        screen: Home,
        navigationOptions: {
            headerTitle: 'Home'
        }

    },

    Cadastrar_Usuario: {
        screen: Cadastrar_Usuario,
        navigationOptions: {

            headerTitle: 'Cadastrar novo usuário.'

        }
    }
    

}
)

export default createAppContainer(MainNav);