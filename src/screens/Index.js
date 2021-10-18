import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Home from './Home';
import CadastrarUsuario from "./CadastrarUsuario"

const Stack = createNativeStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Login"component={Login}></Stack.Screen>
              <Stack.Screen name="Home" component={Home}></Stack.Screen>      
          </Stack.Navigator>
      </NavigationContainer>
    );
  }