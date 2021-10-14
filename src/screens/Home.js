import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from '../styles/App';

import SQLite from 'react-native-sqlite-storage';

export default function Home () {
const db = SQLite.openDatabase(
    {
        name:'syspet_mob',
        location: 'default',
    },
    () => {},
    error=>{ console.log(error) }
);

    
        const [login, setLogin] = useState('');

        const getData = () =>{

            try{
                db.transaction((tx)=>{
                tx.executeSql(
                    "SELECT Usuario from Usuarios",
                    [],        
                (tx, results) => {

                    var len = results.rows.length;  
                    if(len > 0){
                        var loginName = results.rows.item(0)
                        setLogin(loginName);
                    }
                })
            })}
            catch{}

        }

        return (

            <View style={styles.container}>

                    <Text style={styles.texto}> Olá, {login}!!!</Text>
                    <Text style={styles.texto}> Bem vindo</Text>

            </View>
        )
    }



