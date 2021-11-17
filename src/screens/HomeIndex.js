import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {Actions} from 'react-native-router-flux'
import styles from '../styles/home'
import Db from '../../db';

var db = new Db();
const HomeIndex = ({ navigation }) => {
    // INICIALIZAÇÃO DAS TABELAS //
    db.initDb();
    db.initDbClientes();
    db.initDbPet();
    

    return (

        <View style={styles.container}>
              <TouchableOpacity onPress={() => {Actions.login()}}>
                <Text>Retornar Login</Text>
            </TouchableOpacity>
          
        </View>
    )
}


export default HomeIndex;