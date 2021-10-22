import React, { Component } from 'react'
import { Button, Alert } from 'react-native';
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
        {/* Screen de Login */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
             {/* Screen de CadastrarUsuario */}
             <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} options={{ headerShown: false }}></Stack.Screen>
        {/* Screen de Home */}
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false, title: 'Pagina Inicial', headerTintColor: '#fff', headerStyle: { backgroundColor: '#f4511e' }, headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (<Button onPress={() => alert('Bom dia!')}
            title="Saudacao"
            color='#D7263D'></Button>)
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}