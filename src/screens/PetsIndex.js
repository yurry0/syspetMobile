import React, { Component } from 'react'
import { Text, View, Alert, TouchableOpacity } from 'react-native'
import styles from '../styles/pets/PetsIndex'


const PetsIndex = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.texto}>Bem vindo a seção de Pets do Syspet!</Text>
         
            <Text style={styles.texto}>Olha o botão de ADD pet:</Text>

                <TouchableOpacity style={styles.botao} onPress={() => {navigation.navigate('PetsCadastrar') }} >
                <Text style={styles.botaoText}>Cadastrar Novo Pet</Text>
            </TouchableOpacity>
            
            
            


        </View>
    )
}

export default PetsIndex;