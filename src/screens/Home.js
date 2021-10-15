import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/App';

import SQLite from 'react-native-sqlite-storage';

const Home = ({ navigation }, props) => {

    const [login, setLogin] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header}> Bem vindo ao Syspet! </Text>
            <View style={styles.tapWrapper}>
                <Text style={styles.tap} >Clientes</Text>
                <Text style={styles.tap} >Pets</Text>
                <Text style={styles.tap}>Adoções</Text>
                <Text style={styles.tap}>Logout</Text>


                <Text>Teste</Text>
        
                
            </View>

        </View>

    )
}

export default Home;


