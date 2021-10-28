import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/App';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SQLite from 'react-native-sqlite-storage';

import AdocoesIndex from './AdocoesIndex';
import PetsIndex from './PetsIndex';
import ClientesIndex from './ClientesIndex';
import HomeIndex from './HomeIndex';
import Db from '../../db';

var db = new Db();

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {

  db.initDb();

    // const [login, setLogin] = useState('');
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Index') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            }
            else if (route.name === 'Clientes') {
              iconName = focused
                ? 'ios-people'
                : 'ios-people-outline';
            } else if (route.name === 'Pets') {
              iconName = focused ? 'ios-star' : 'ios-star';
            }
            else if (route.name === 'Adoções') {
              iconName = focused ? 'ios-add' : 'ios-add-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      > 
        <Tab.Screen  name="Index" component={HomeIndex} options={{headerShown: false}} />
        <Tab.Screen  name="Clientes" component={ClientesIndex} />
        <Tab.Screen name="Pets" component={PetsIndex} />
        <Tab.Screen name="Adoções" component={AdocoesIndex} />
        
      </Tab.Navigator>
    )
}

export default Home;


