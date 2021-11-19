import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from '../styles/home'
import Db from '../../db';
import { Button, ThemeProvider, Divider } from 'react-native-elements';
;

var db = new Db();

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
const HomeIndex = ({ navigation }) => {
    // INICIALIZAÇÃO DAS TABELAS //
    db.initDb();
    db.initDbClientes();
    db.initDbPet();


    return (


        <View style={styles.container}>
            <View style={{ justifyContent: 'flex-start' }}>
                <Image
                    style={styles.header_image}
                    source={require('../assets/teste_header.png')} />

                <Image
                    style={styles.horizontal}
                    source={require('../assets/horizontal_teste.png')} />

            </View>
            <View style={{ flexDirection: 'row', alignContent: 'center' }} >
                <TouchableOpacity onPress={() => { Actions.login() }}>
                    <Image
                        style={styles.button_img}
                        source={require('../assets/button_img.png')} />
                </TouchableOpacity>
            </View>





        </View>
    )
}


export default HomeIndex;