import React, { Component, useState, useEffect } from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/Login';
import Db from '../../db';

var db = new Db();


const selectUsuario = (login, senha) => {
  db.initDb();
  let usuario = {
    login: login,
    senha: senha
  }
  db.selectUser(usuario);
}


export default class Login extends Component{


// const Login = ({ navigation }, props) => {



  render () {


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
        autoCapitalize='none'
        onChangeText={login => setLogin}
      />

      <TextInput
        style={styles.barra}
        secureTextEntry={true}
        placeholder="Digite sua senha de acesso"
        autoCapitalize='none'
        onChangeText={senha => setSenha}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => { selectUsuario(usuario)}}
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


};
}

