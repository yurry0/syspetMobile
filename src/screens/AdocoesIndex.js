import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/adocoes/AdocoesIndex'
const AdocoesIndex = ({navigation}) =>{

    return(

        <View style={styles.container}>
        <Text style={styles.texto}>Bem vindo a seção de adoções do Syspet!</Text>
        <Text style={styles.texto}>Olha o botão de ADD adoções:</Text>
        <TouchableOpacity style={styles.botao} onPress={() => { navigation.navigate('AdocoesCadastrar') }} >
            <Text style={styles.botaoText}>Cadastrar novo cliente</Text>
        </TouchableOpacity>
    </View>
    )
}


export default AdocoesIndex;