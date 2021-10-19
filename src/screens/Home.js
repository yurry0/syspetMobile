import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/App';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
import SQLite from 'react-native-sqlite-storage';

import AdocoesIndex from './AdocoesIndex';
import PetsIndex from './PetsIndex';
import ClientesIndex from './ClientesIndex';


const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

    // const [login, setLogin] = useState('');
    return (
        <Tab.Navigator>
        <Tab.Screen name="Clientes" component={ClientesIndex} />
        <Tab.Screen name="Pets" component={PetsIndex} />
        <Tab.Screen name="Adoções" component={AdocoesIndex} />
        
      </Tab.Navigator>
    )
}

export default Home;


