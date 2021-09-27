import React, {Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './Home';

import Login from './Login';

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

    }


}
)

export default createAppContainer(MainNav);