import React, { Component } from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import styles from '../styles/clientes/ClientesIndex';

import Db from '../../db';



const ClientesIndex = ({ navigation }) => {

var db = new Db();


    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Bem vindo a seção de cliente do Syspet!</Text>
            <Text style={styles.texto}>Olha o botão de ADD cliente:</Text>
            <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('ClientesCadastrar') }} >
                <Text style={styles.botaoText}>Cadastrar novo cliente</Text>
            </TouchableOpacity>
        </View>
    )

}

export default ClientesIndex;