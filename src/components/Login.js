import React, { Component} from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from '../styles/Login';

export default class App extends Component {

  state = {
    nome : ""
  }
 
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
          onChangeText={ text => this.state.nome = text}
        />

        <TextInput
          style={styles.barra}
          secureTextEntry={true}
          placeholder="Digite sua senha de acesso"
        />

       <TouchableOpacity
       style={styles.botao}
       onPress={() => {this.props.navigation.navigate('Home', {'nome': this.state.nome})}}
       >
            <Text style={styles.botaoText}>Login</Text>

       </TouchableOpacity>


      </View>
    )
  }
}

