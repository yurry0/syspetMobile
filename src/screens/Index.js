import React, { Component } from 'react'
import { Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Home from './Home';
import CadastrarUsuario from "./CadastrarUsuario"
import PetsCadastrar from './PetsCadastrar'
import ClientesCadastrar from './ClientesCadastrar'
import AdocoesCadastrar from './AdocoesCadastrar';
import ClientesEditar from './ClientesEditar';
import drop from './debug_drop';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        {/* Screen de Login */}
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>

        {/* Screen de CadastrarUsuario */}
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} options={{ headerTintColor: '#333533', headerTitle: 'Cadastre um novo usuário' }}></Stack.Screen>

        {/* Screen de Drop - SÓ PRA DEBUG! EXCLUIR ANTES DA VERSÃO FINAL SAIR!!!!!!!!*/}
        <Stack.Screen name="drop" component={drop} options={{ headerTintColor: '#333533', headerTitle: 'Cadastre um novo usuário' }}></Stack.Screen>

        {/* Screen de Home - Nessa screen acontece o nesting com o TabNavigator (modificações do tab devem ser feitas em Home.js) */}
        <Stack.Screen name="Home" component={Home} options={{
          headerShown: false, title: 'Pagina Inicial', headerTintColor: '#fff', headerStyle: { backgroundColor: '#f4511e' }, headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => (<Button onPress={() => alert('Bom dia!')}
            title="Saudacao"
            color='#D7263D'></Button>)
        }}></Stack.Screen>

        {/* C L I E N T ES */}

        {/* Screen de Cadastrar Clientes*/}

        <Stack.Screen name="ClientesCadastrar" component={ClientesCadastrar} options={{ headerTintColor: '#333533', headerTitle: 'Cadastre um novo cliente' }}></Stack.Screen>

        {/* Screen de Editar Clientes*/}

        <Stack.Screen name="ClientesEditar" component={ClientesEditar} options={{ headerTintColor: '#333533', headerTitle: 'Editar um cliente' }}></Stack.Screen>

        

        {/* Screen de Cadastrar Pets*/}

        <Stack.Screen name="PetsCadastrar" component={PetsCadastrar} options={{ headerTintColor: '#333533', headerTitle: 'Cadastre um novo pet' }}></Stack.Screen>



        {/* Screen de Cadastrar Adocoes*/}

        <Stack.Screen name="AdocoesCadastrar" component={AdocoesCadastrar} options={{ headerTintColor: '#333533', headerTitle: 'Adicionar nova adoção' }}></Stack.Screen>



      </Stack.Navigator>
    </NavigationContainer>
  );
}