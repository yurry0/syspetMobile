import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/App';


export default class Home extends Component {
    render() {

        const {navigation} = this.props;
        const nomeUsuario = navigation.getParam('nome');


        return (

            <View style={styles.container}>

                    <Text style={styles.texto}> Olá, {nomeUsuario}  !!!</Text>
                    <Text style={styles.texto}> Bem vindo</Text>

            </View>
        )
    }
}


