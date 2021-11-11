import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import Db from '../../db';

var db = new Db();
const HomeIndex = ({ navigation }) => {
    // INICIALIZAÇÃO DAS TABELAS //
    db.initDb();
    db.initDbClientes();
    db.initDbPet();
    

    return (

        <View style={{
            flex: 1,
            alignContent: 'center'
        }}>

            <TouchableOpacity onPress={() => {Actions.login()}}>
                <Text >Retornar Login</Text>
            </TouchableOpacity>
        </View>
    )
}


export default HomeIndex;