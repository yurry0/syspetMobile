import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './Login';
import Home from './Home';
import CadastrarUsuario from "./CadastrarUsuario"

const MainNav = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false

            }
        },
        Home: {

            screen: Home,
            navigationOptions: {
                headerTitle: 'Home'
            }

        },

        CadastrarUsuario: {
            screen: CadastrarUsuario,
            navigationOptions: {

                headerTitle: 'Cadastrar novo usuário'

            }
        }


    }
)

export default createAppContainer(MainNav);