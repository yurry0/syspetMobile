import React, { Component, useState } from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/Login';
import SQLite from 'react-native-sqlite-storage';



export default class App extends Component {


  render() {

    return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      
      <TextInput
        style={styles.barra}
        placeholder="Digite seu e-mail de acesso"
        keyboardType="email-address"
        onChangeText={text => this.state.login = text}
      />

      <TextInput
        style={styles.barra}
        secureTextEntry={true}
        placeholder="Digite sua senha de acesso"
        onChangeText={text => this.state.senha = text}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => { this.props.navigation.navigate('Home', {'login': this.state.login }, {'senha': this.state.senha}) }}
      >
        <Text style={styles.botaoText}>Login</Text>

      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCad}
        onPress={() => { this.props.navigation.navigate('CadastrarUsuario') }}
      >
        <Text style={styles.botaoText}>Cadastrar Usuário</Text>

      </TouchableOpacity>


    </View>

  )
  }

}