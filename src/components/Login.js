import React, { Component} from 'react'
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {

    width: 150,
    height: 150,
    borderRadius: 100

  },

  barra: {
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },
  
  botao: {
    marginTop: 50,
    width: 300,
    height: 42, 
    backgroundColor: '#C83E4D',

  },

  botaoText: {
    color: '#fff',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 16
  }




})