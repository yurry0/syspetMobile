import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Db from '../../db';

var db = new Db();
const ClientesView = ({ navigation }) => {
    // INICIALIZAÇÃO DAS TABELAS //
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
        }}>

            <Text >Perfil de usuário</Text>

            <Text >Perfil de usuário</Text>

            <Text >Perfil de usuário</Text>

            <Text >Perfil de usuário</Text>



        </View>
    )
}


export default ClientesView;